import { useEffect, useRef, useState } from "react";
import { heroFrames, heroPoster } from "@/data/heroFrames";

/** Slower cinematic pace — roughly half the previous rate. */
const FPS = 8;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function paintCover(ctx, img, w, h, zoom, biasX = 0.35) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight) * zoom;
  const dw = img.naturalWidth * scale;
  const dh = img.naturalHeight * scale;
  const dx = (w - dw) * biasX;
  const dy = (h - dh) * 0.5;
  ctx.drawImage(img, dx, dy, dw, dh);
}

function paintFrame(canvas, current, next, blend, zoom) {
  if (!canvas || !current?.naturalWidth) return;
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (w < 2 || h < 2) return;

  const tw = Math.floor(w * dpr);
  const th = Math.floor(h * dpr);
  if (canvas.width !== tw || canvas.height !== th) {
    canvas.width = tw;
    canvas.height = th;
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = "#e8e8e6";
  ctx.fillRect(0, 0, w, h);

  paintCover(ctx, current, w, h, zoom);
  if (next && blend > 0.01) {
    ctx.globalAlpha = blend;
    paintCover(ctx, next, w, h, zoom);
    ctx.globalAlpha = 1;
  }

  // Soft vignette so the stage feels lit, not flat
  const grad = ctx.createRadialGradient(
    w * 0.45,
    h * 0.48,
    Math.min(w, h) * 0.2,
    w * 0.5,
    h * 0.5,
    Math.max(w, h) * 0.72,
  );
  grad.addColorStop(0, "rgba(232,232,230,0)");
  grad.addColorStop(1, "rgba(210,210,206,0.45)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
}

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const indexRef = useRef(0);
  const dirRef = useRef(1);
  const blendRef = useRef(0);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function draw(now = performance.now()) {
      const frames = framesRef.current;
      if (!frames.length) return;
      const i = indexRef.current;
      const next = frames[i + dirRef.current] ?? frames[i];
      const zoom = 1.02 + Math.sin(now / 9000) * 0.025;
      paintFrame(
        canvasRef.current,
        frames[i],
        next,
        blendRef.current,
        zoom,
      );
    }

    async function boot() {
      try {
        const first = await loadImage(heroPoster);
        if (cancelled) return;
        framesRef.current = [first];
        indexRef.current = 0;
        draw();
        setReady(true);

        const images = await Promise.all(heroFrames.map(loadImage));
        if (cancelled) return;
        framesRef.current = images;
        indexRef.current = Math.floor(images.length * 0.32);
        dirRef.current = 1;
        blendRef.current = 0;
        draw();

        const tick = (now) => {
          if (cancelled) return;
          if (document.hidden) {
            lastRef.current = now;
            rafRef.current = requestAnimationFrame(tick);
            return;
          }
          if (!lastRef.current) lastRef.current = now;
          const elapsed = now - lastRef.current;
          const interval = 1000 / FPS;

          // Smooth crossfade through each frame hold
          blendRef.current = Math.min(1, elapsed / interval);

          if (elapsed >= interval) {
            lastRef.current = now - (elapsed % interval);
            blendRef.current = 0;
            const last = images.length - 1;
            let next = indexRef.current + dirRef.current;
            if (next >= last) {
              next = last;
              dirRef.current = -1;
            } else if (next <= 0) {
              next = 0;
              dirRef.current = 1;
            }
            indexRef.current = next;
          }

          draw(now);
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      } catch (err) {
        console.error("[HeroSequence]", err);
        if (!cancelled) setFailed(true);
      }
    }

    const onResize = () => draw();
    window.addEventListener("resize", onResize);
    boot();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#e8e8e6]" aria-hidden="true">
      {(!ready || failed) && (
        <img
          src={heroPoster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[35%_50%]"
        />
      )}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-canvas via-canvas/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas/55 to-transparent" />
    </div>
  );
}
