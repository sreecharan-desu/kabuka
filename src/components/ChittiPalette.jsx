import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CHITTI_OPEN, getModKey } from "@/lib/chitti";

const hints = [
  { label: "shop", target: "#angadi", hover: "hover:text-hue-red" },
  { label: "repair", target: "#adda", hover: "hover:text-hue-yellow" },
  { label: "care", target: "#abhaya", hover: "hover:text-hue-blue" },
  { label: "rent", target: "#travel", hover: "hover:text-hue-indigo" },
  { label: "work", target: "#workforce", hover: "hover:text-hue-green" },
];

export default function ChittiPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const openRef = useRef(false);
  const titleId = useId();
  const reduce = useReducedMotion();
  const modKey = getModKey();

  function close() {
    openRef.current = false;
    setOpen(false);
    setQuery("");
    setSubmitted("");
  }

  function openPalette() {
    openRef.current = true;
    setOpen(true);
  }

  function jump(target) {
    close();
    requestAnimationFrame(() => {
      const el = document.querySelector(target);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", target);
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const q = query.trim();
    if (!q) {
      setSubmitted("");
      return;
    }
    setSubmitted(q);
  }

  useEffect(() => {
    function onOpen() {
      openPalette();
    }
    window.addEventListener(CHITTI_OPEN, onOpen);
    return () => window.removeEventListener(CHITTI_OPEN, onOpen);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      const key = event.key;
      if ((event.metaKey || event.ctrlKey) && (key === "k" || key === "K")) {
        event.preventDefault();
        if (openRef.current) {
          close();
        } else {
          openPalette();
        }
        return;
      }
      if (key === "Escape" && openRef.current) {
        event.preventDefault();
        close();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = prev;
      cancelAnimationFrame(id);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onFocusIn(event) {
      const panel = panelRef.current;
      if (!panel) return;
      if (!panel.contains(event.target)) {
        inputRef.current?.focus();
      }
    }

    document.addEventListener("focusin", onFocusIn);
    return () => document.removeEventListener("focusin", onFocusIn);
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh] sm:pt-[18vh]"
          role="presentation"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <button
            type="button"
            aria-label="Close Chitti"
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            onClick={close}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-edge bg-card shadow-[0_16px_48px_rgba(17,17,19,0.12)]"
            initial={reduce ? false : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={onSubmit} className="px-5 pt-5 sm:px-6 sm:pt-6">
              <div className="flex items-center justify-between gap-3">
                <p
                  id={titleId}
                  className="text-[0.8125rem] text-ink-soft"
                >
                  Chitti
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="text-[0.75rem] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  Close
                </button>
              </div>

              <div className="relative mt-3 flex items-end gap-3 pb-2">
                <span
                  className="mb-2.5 h-1.5 w-1.5 shrink-0 rounded-full spectrum-gradient"
                  aria-hidden="true"
                />
                <input
                  ref={inputRef}
                  id="chitti"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    if (submitted) setSubmitted("");
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="What do you need nearby?"
                  className="h-10 w-full bg-transparent text-[1.05rem] text-ink outline-none placeholder:text-ink-soft/60"
                  autoComplete="off"
                  spellCheck={false}
                />
                <button
                  type="submit"
                  className="mb-1 shrink-0 text-[0.875rem] font-medium text-ink underline-offset-4 hover:underline"
                >
                  Go
                </button>
                <span
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-ink/20 transition-opacity ${
                    focused ? "opacity-0" : "opacity-100"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 spectrum-gradient transition-opacity ${
                    focused ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-ink-soft">
                {hints.map((hint, index) => (
                  <span
                    key={hint.label}
                    className="inline-flex items-center gap-3"
                  >
                    {index > 0 ? <span aria-hidden="true">·</span> : null}
                    <button
                      type="button"
                      onClick={() => jump(hint.target)}
                      className={`transition-colors ${hint.hover}`}
                    >
                      {hint.label}
                    </button>
                  </span>
                ))}
              </p>
            </form>

            {submitted ? (
              <div className="mt-5 border-t border-edge px-5 py-8 text-center sm:px-6">
                <p className="text-[0.9375rem] font-medium text-ink">
                  Nothing nearby for that yet.
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  No results for “{submitted}”
                </p>
              </div>
            ) : null}

            <div className="mt-5 flex items-center justify-between border-t border-edge px-5 py-3 font-mono text-[0.6875rem] text-ink-soft sm:px-6">
              <span>
                <kbd className="rounded border border-edge bg-canvas px-1.5 py-0.5">
                  {modKey}K
                </kbd>{" "}
                to toggle
              </span>
              <span>
                <kbd className="rounded border border-edge bg-canvas px-1.5 py-0.5">
                  esc
                </kbd>{" "}
                to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
