import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { growCards, hueToken } from "@/data/site";

const washClass = {
  red: "wash-red",
  yellow: "wash-yellow",
};

export default function Grow() {
  return (
    <section id="grow" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[0.8125rem] text-ink-soft">Partner paths</p>
          <h2 className="mt-1 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Grow with Kabuka
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
            Start selling, managing, and growing your business with Kabuka.
          </p>
        </Reveal>
      </Container>

      <div className="mt-14 space-y-0">
        {growCards.map((card, index) => {
          const reverse = index % 2 === 1;
          const inkCta = card.hue === "yellow";
          return (
            <Reveal key={card.id} delay={0.08 * index}>
              <article
                className={`group ${washClass[card.hue]} py-12 sm:py-16`}
              >
                <Container>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div
                      className={`media-zoom aspect-[16/10] w-full ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={card.image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className={reverse ? "lg:order-1" : ""}>
                      <span
                        className="hue-rule mb-6"
                        style={{ background: hueToken[card.hue] }}
                      />
                      <h3 className="text-xl font-semibold tracking-tight">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                        {card.body}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {card.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-ink"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: hueToken[card.hue] }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={card.href}
                        target={
                          card.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          card.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className={`cta-pill mt-8 ${inkCta ? "cta-pill-ink" : ""}`}
                        style={{ background: hueToken[card.hue] }}
                      >
                        {card.cta}
                      </a>
                    </div>
                  </div>
                </Container>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
