import Container from "@/components/Container";
import Mark from "@/components/Mark";
import { brand, footer } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-canvas py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark size={24} />
              <span className="text-base font-semibold tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {footer.blurb}
            </p>
          </div>

          <div>
            <h3 className="text-[0.8125rem] font-medium text-ink-soft">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footer.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.8125rem] font-medium text-ink-soft">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footer.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink transition-opacity hover:opacity-70"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.8125rem] font-medium text-ink-soft">
              Follow us
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footer.social.map((name) => (
                <li key={name}>
                  <span className="text-sm text-ink-soft">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-edge pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">{brand.copyright}</p>
          <div
            className="h-1 w-28 rounded-full spectrum-gradient opacity-80"
            aria-hidden="true"
          />
        </div>
      </Container>
    </footer>
  );
}
