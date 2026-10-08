import Container from "@/components/Container";
import Mark from "@/components/Mark";
import Reveal from "@/components/Reveal";
import { brand } from "@/data/site";

export default function Closer() {
  return (
    <section id="closer" className="bg-dark py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-6 flex flex-col items-center">
              <Mark size={52} />
              <span
                className="mt-4 h-0.5 w-16 spectrum-gradient"
                aria-hidden="true"
              />
            </div>
            <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {brand.name}
            </p>
            <p className="mt-4 text-base text-white/55 sm:text-lg">
              {brand.tagline}
            </p>
            <a
              href={brand.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-pill mt-10"
              style={{ background: "var(--color-hue-violet)" }}
            >
              Open Kabuka
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
