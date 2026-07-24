import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/hibiscus-logo.jpeg.asset.json";

const footerLinks: { label: string; to: "/about" | "/work" | "/impact" | "/leadership" | "/involved" }[] = [
  { label: "About", to: "/about" },
  { label: "What We Do", to: "/work" },
  { label: "Impact", to: "/impact" },
  { label: "Leadership", to: "/leadership" },
  { label: "Get Involved", to: "/involved" },
];

export function Footer() {
  return (
    <footer
      className="pt-24 md:pt-32 pb-10 text-[color:var(--color-primary-foreground)]"
      style={{ background: "var(--color-primary)" }}
    >
      <div className="container-editorial">
        <div
          className="h-px w-24 mb-16"
          style={{ background: "var(--color-secondary)" }}
        />
        <div className="grid md:grid-cols-12 gap-14 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center">
              <img
                src={logo.url}
                alt="Hibiscus Dotage Foundation"
                width={112}
                height={112}
                className="h-24 w-24 md:h-28 md:w-28 rounded-sm object-cover ring-1 ring-white/15"
              />
            </div>

            <p className="mt-8 font-serif text-2xl md:text-3xl leading-snug max-w-md text-primary-foreground/90">
              Young for the elderly. So no library burns on our watch.
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              A youth-led movement restoring dignity to how Africa treats its elders.
              Registered in Zimbabwe.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)]">
              Explore
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)]">
              Newsletter
            </div>
            <p className="mt-6 text-sm text-primary-foreground/80 leading-relaxed">
              Letters from the field. Four a year. Never noisy.
            </p>
            <form
              className="mt-6 flex items-center border-b border-[color:var(--color-secondary)]/60"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@somewhere.com"
                className="flex-1 bg-transparent py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                className="text-[0.7rem] uppercase tracking-[0.22em] py-3 text-[color:var(--color-secondary)] hover:text-primary-foreground transition-colors"
              >
                Subscribe →
              </button>
            </form>
            <div className="mt-10 flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-primary-foreground/60">
          <div>
            © {new Date().getFullYear()} Hibiscus Dotage Foundation. All rights reserved. · Website designed and maintained by{" "}
            <a
              href="https://tungasonic.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground underline-offset-4 hover:underline"
            >
              tungasonic
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">Privacy</a>
            <a href="#" className="hover:text-primary-foreground">Safeguarding</a>
            <a
              href="https://drive.google.com/uc?export=download&id=1KHrWjhVkGT-oX87AAIOdtNtUrFsY1gaC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground"
            >
              Annual Report
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
