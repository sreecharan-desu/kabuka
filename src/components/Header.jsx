import { useEffect, useState } from "react";
import Mark from "@/components/Mark";
import Container from "@/components/Container";
import { brand, hueToken, nav } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-300",
        solid
          ? "border-b border-edge/80 bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <Mark size={28} className="shrink-0" />
          <span className="text-[1.1rem] font-semibold tracking-tight text-ink">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.875rem] font-medium text-ink/70 transition-colors hover:text-[var(--nav-hue)]"
              style={{ "--nav-hue": hueToken[item.hue] }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "text-[0.875rem] font-medium transition-colors",
            solid
              ? "rounded-full bg-ink px-4 py-2 text-white hover:opacity-90"
              : "text-ink underline-offset-4 hover:underline",
          )}
        >
          Open Kabuka
        </a>
      </Container>
    </header>
  );
}
