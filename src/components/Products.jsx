import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { hueToken, products } from "@/data/site";

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="text-[0.8125rem] text-ink-soft">The platform</p>
          <h2 className="mt-1 max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
            Three ways Kabuka shows up in a neighborhood.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {products.map((product, index) => {
            const inkCta = product.hue === "yellow";
            return (
              <Reveal key={product.id} delay={0.08 * index}>
                <li id={product.id} className="group">
                  <div className="media-zoom aspect-[4/5] w-full">
                    <img
                      src={product.image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className="hue-rule mt-6 mb-5"
                    style={{ background: hueToken[product.hue] }}
                  />
                  <p className="text-[0.75rem] text-ink-soft tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {product.body}
                  </p>
                  <a
                    href={product.href}
                    className={`cta-pill mt-6 ${inkCta ? "cta-pill-ink" : ""}`}
                    style={{ background: hueToken[product.hue] }}
                  >
                    {product.cta}
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
