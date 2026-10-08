import Container from "@/components/Container";
import HeroSequence from "@/components/HeroSequence";
import Mark from "@/components/Mark";
import { brand } from "@/data/site";
import { openChitti } from "@/lib/chitti";

export default function Hero() {

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroSequence />

      {/* Extra readability veil for the brand block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-canvas via-canvas/70 to-transparent"
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-14 pt-28 sm:pb-20 sm:pt-32">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-3">
            <Mark size={48} className="shrink-0" />
            <p className="text-[2.75rem] leading-none font-semibold tracking-[-0.04em] text-ink sm:text-[3.75rem]">
              {brand.name}
            </p>
          </div>

          <h1 className="text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.03em] text-ink sm:text-[2.25rem]">
            Everything nearby.
          </h1>
          <p className="mt-3 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Local commerce, everyday services, and care — on one platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={brand.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-[0.875rem] font-medium text-white transition-opacity hover:opacity-90"
            >
              Open Kabuka
            </a>
            <button
              type="button"
              onClick={openChitti}
              className="spectrum-underline pb-0.5 text-[0.875rem] font-medium text-ink-soft hover:text-ink"
            >
              Ask Chitti
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
