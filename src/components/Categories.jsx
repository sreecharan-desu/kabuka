import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { categories } from "@/data/site";

export default function Categories() {
  return (
    <section id="categories" className="wash-orange py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.8125rem] text-ink-soft">Trending</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                Categories
              </h2>
            </div>
            <a
              href="https://www.kabuka.in/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.875rem] font-medium text-hue-orange underline-offset-4 transition-opacity hover:opacity-80 hover:underline"
            >
              View all
            </a>
          </div>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <div className="media-zoom aspect-[16/10] w-full lg:aspect-[16/11]">
              <img
                src={categories.image}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-10">
              {categories.items.map((category, index) => (
                <li key={category.name} className="group">
                  <span className="hue-rule mb-4 bg-hue-orange" />
                  <p className="text-[0.75rem] text-ink-soft tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight transition-colors group-hover:text-hue-orange">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{category.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
