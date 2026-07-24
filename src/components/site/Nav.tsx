import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

const links = [
  { to: "/about", label: "About" },
  { to: "/chairman", label: "Chairman" },
  { to: "/strategy", label: "Strategy" },
  { to: "/work", label: "Programmes" },
  { to: "/impact", label: "Impact" },
  { to: "/involved", label: "Get Involved" },
] as const;

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-black/10 shadow-sm"
      style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
    >
      <div className="container-editorial flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center" style={{ color: "var(--primary-foreground)" }}>
          <img
            src={logo}
            alt="Hibiscus Dotage Foundation"
            width={72}
            height={72}
            className="h-16 w-16 md:h-20 md:w-20 rounded-sm object-cover ring-1 ring-white/15"
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ style: { color: "var(--color-secondary)" } }}
              className="text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80"
              style={{ color: "var(--primary-foreground)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/volunteer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.18em] border transition-colors"
            style={{
              borderColor: "var(--color-secondary)",
              color: "var(--color-secondary)",
              background: "transparent",
            }}
          >
            Volunteer
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center border"
          style={{ borderColor: "var(--primary-foreground)" }}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-px w-5" style={{ background: "var(--primary-foreground)" }} />
            <span className="block h-px w-5" style={{ background: "var(--primary-foreground)" }} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10" style={{ background: "var(--primary)" }}>
          <div className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em]"
                style={{ color: "var(--primary-foreground)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/volunteer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.18em] border self-start"
              style={{ borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      )}

      <div
        className="h-px origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})`, background: "var(--color-secondary)" }}
        aria-hidden
      />
    </header>
  );
}
