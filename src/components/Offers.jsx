import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { hueToken, offers } from "@/data/site";

const washClass = {
  green: "wash-green",
  indigo: "wash-indigo",
  violet: "wash-violet",
};

export default function Offers() {
  return (
    <section id="offers" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[0.8125rem] text-ink-soft">Network</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Work, move, and get help
          </h2>
        </Reveal>
      </Container>

      <ul className="mt-14 space-y-0">
        {offers.map((offer, index) => {
          const reverse = index % 2 === 1;
          return (
            <Reveal key={offer.id} delay={0.08 * index}>
              <li
                id={offer.id}
                className={`group ${washClass[offer.hue]} py-12 sm:py-14`}
              >
                <Container>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div
                      className={`media-zoom aspect-[16/10] w-full ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={offer.image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className={reverse ? "lg:order-1" : ""}>
                      <p
                        className="text-[0.8125rem] font-medium"
                        style={{ color: hueToken[offer.hue] }}
                      >
                        {offer.kicker}
                      </p>
                      <span
                        className="hue-rule mt-4 mb-5"
                        style={{ background: hueToken[offer.hue] }}
                      />
                      <h3 className="text-xl font-semibold tracking-tight">
                        {offer.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                        {offer.body}
                      </p>
                      <a
                        href={offer.href}
                        target="_blank"
                        rel="noreferrer"
                        className="cta-pill mt-6"
                        style={{ background: hueToken[offer.hue] }}
                      >
                        {offer.cta}
                      </a>
                    </div>
                  </div>
                </Container>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
