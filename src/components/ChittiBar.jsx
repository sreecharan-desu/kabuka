import Container from "@/components/Container";
import { openChitti } from "@/lib/chitti";

const hints = ["shop", "repair", "care", "rent", "work"];

export default function ChittiBar() {
  return (
    <section
      id="chitti-bar"
      className="border-y border-edge bg-card py-8 sm:py-10"
    >
      <Container>
        <button
          type="button"
          onClick={openChitti}
          className="mx-auto block w-full max-w-2xl text-left"
          aria-haspopup="dialog"
          aria-label="Open Chitti"
        >
          <p className="mb-3 text-[0.8125rem] text-ink-soft">Chitti</p>
          <div className="relative flex items-end gap-3 pb-2">
            <span
              className="mb-2.5 h-1.5 w-1.5 shrink-0 rounded-full spectrum-gradient"
              aria-hidden="true"
            />
            <span className="flex h-10 w-full items-center text-[1.05rem] text-ink-soft/60">
              What do you need nearby?
            </span>
            <span className="mb-1 shrink-0 text-[0.875rem] font-medium text-ink">
              Go
            </span>
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-ink/20"
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-ink-soft">
            {hints.map((hint, index) => (
              <span key={hint} className="inline-flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                <span>{hint}</span>
              </span>
            ))}
          </p>
        </button>
      </Container>
    </section>
  );
}
