import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

const programmeItems = [
  { to: "/interwoven", label: "1. Interwoven Lives", desc: "Children & Elderly Caregivers (Muzukuru)" },
  { to: "/volunteer", label: "2. Volunteer Philosophy", desc: "Youth Aspect & Relational Leadership" },
  { to: "/elderly", label: "3. The Elderly", desc: "SilverCare, Golden Grit & Dignity" },
] as const;

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [progDropdown, setProgDropdown] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(true);

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

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/about"
            activeProps={{ style: { color: "var(--color-secondary)" } }}
            className="text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80"
            style={{ color: "var(--primary-foreground)" }}
          >
            About
          </Link>

          {/* Programmes Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgDropdown(true)}
            onMouseLeave={() => setProgDropdown(false)}
          >
            <button
              type="button"
              onClick={() => setProgDropdown((v) => !v)}
              className="inline-flex items-center gap-1.5 text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80 py-2"
              style={{ color: "var(--primary-foreground)" }}
            >
              Programmes
              <span className="text-[0.6rem] transition-transform duration-300" style={{ transform: progDropdown ? "rotate(180deg)" : "rotate(0deg)" }}>
                ▼
              </span>
            </button>

            {progDropdown && (
              <div
                className="absolute top-full left-0 w-72 p-3 rounded-sm border shadow-2xl space-y-1 backdrop-blur-md"
                style={{
                  background: "var(--primary)",
                  borderColor: "var(--color-secondary)",
                }}
              >
                {programmeItems.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    onClick={() => setProgDropdown(false)}
                    className="block p-3 rounded-xs hover:bg-white/10 transition-colors"
                  >
                    <div className="text-[0.75rem] uppercase tracking-wider font-semibold text-[color:var(--color-secondary)]">
                      {p.label}
                    </div>
                    <div className="text-[0.7rem] text-white/80 mt-0.5 font-sans normal-case">
                      {p.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/leadership"
            activeProps={{ style: { color: "var(--color-secondary)" } }}
            className="text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80"
            style={{ color: "var(--primary-foreground)" }}
          >
            Leadership
          </Link>

          <Link
            to="/strategy"
            activeProps={{ style: { color: "var(--color-secondary)" } }}
            className="text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80"
            style={{ color: "var(--primary-foreground)" }}
          >
            Strategy
          </Link>

          <Link
            to="/impact"
            activeProps={{ style: { color: "var(--color-secondary)" } }}
            className="text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80"
            style={{ color: "var(--primary-foreground)" }}
          >
            Impact
          </Link>

          <Link
            to="/involved"
            activeProps={{ style: { color: "var(--color-secondary)" } }}
            className="text-[0.78rem] uppercase tracking-[0.18em] transition-colors hover:opacity-80"
            style={{ color: "var(--primary-foreground)" }}
          >
            Get Involved
          </Link>
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
          <div className="container-editorial py-6 flex flex-col gap-4">
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--primary-foreground)" }}
            >
              About
            </Link>

            <div className="border-y border-white/10 py-3">
              <button
                type="button"
                onClick={() => setMobileProgOpen((v) => !v)}
                className="w-full flex items-center justify-between text-sm uppercase tracking-[0.18em] text-[color:var(--color-secondary)] font-semibold"
              >
                <span>Programmes</span>
                <span className="text-xs">{mobileProgOpen ? "▲" : "▼"}</span>
              </button>

              {mobileProgOpen && (
                <div className="mt-3 pl-3 flex flex-col gap-3 border-l-2 border-[color:var(--color-secondary)]">
                  {programmeItems.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setOpen(false)}
                      className="text-xs uppercase tracking-wider text-white/90"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/leadership"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--primary-foreground)" }}
            >
              Leadership
            </Link>

            <Link
              to="/strategy"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--primary-foreground)" }}
            >
              Strategy
            </Link>

            <Link
              to="/impact"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--primary-foreground)" }}
            >
              Impact
            </Link>

            <Link
              to="/involved"
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--primary-foreground)" }}
            >
              Get Involved
            </Link>

            <Link
              to="/volunteer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.18em] border self-start mt-2"
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

