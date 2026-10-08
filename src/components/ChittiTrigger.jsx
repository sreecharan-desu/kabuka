import { useSyncExternalStore } from "react";
import { getModKey, openChitti } from "@/lib/chitti";
import { cn } from "@/lib/cn";

function subscribe() {
  return () => {};
}

function getModKeySnapshot() {
  return getModKey();
}

function getServerSnapshot() {
  return "⌘";
}

export default function ChittiTrigger({ className = "", compact = false }) {
  const modKey = useSyncExternalStore(
    subscribe,
    getModKeySnapshot,
    getServerSnapshot,
  );

  return (
    <button
      type="button"
      onClick={openChitti}
      aria-haspopup="dialog"
      aria-label="Ask Chitti, opens with Command K"
      className={cn(
        "group inline-flex h-9 items-center gap-2 rounded-full border border-edge bg-card/90 px-2.5 text-[0.8125rem] text-ink-soft shadow-sm transition-[border-color,color,background-color] hover:border-ink/20 hover:text-ink",
        className,
      )}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full spectrum-gradient"
        aria-hidden="true"
      />
      {!compact ? (
        <span className="hidden font-medium sm:inline">Ask Chitti</span>
      ) : null}
      <kbd className="inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-edge bg-canvas px-1.5 font-mono text-[0.6875rem] text-ink/70">
        {modKey}K
      </kbd>
    </button>
  );
}
