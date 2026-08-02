import type { ReactNode } from "react";
import fallbackImg from "@/assets/hibscuss/hero.jpeg";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  primaryImage = fallbackImg,
  secondaryImage,
  badge,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  primaryImage?: string;
  secondaryImage?: string;
  badge?: { value: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>

      {/* ── Paper noise texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container-editorial relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* ── LEFT: Text column ── */}
          <div className="lg:col-span-6 flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="rule-gold" />
              <span
                className="text-[0.68rem] uppercase tracking-[0.26em] font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif leading-[0.97] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 5.8rem)",
                color: "var(--color-foreground)",
              }}
            >
              {title}
            </h1>

            {/* Gold underline accent below headline */}
            <div
              aria-hidden
              style={{
                height: "2px",
                width: "4rem",
                background: "linear-gradient(90deg, var(--color-secondary) 0%, transparent 100%)",
              }}
            />

            {/* Lede */}
            {lede && (
              <p
                className="max-w-lg text-lg leading-relaxed"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {lede}
              </p>
            )}

            {children}
          </div>

          {/* ── RIGHT: Asymmetric photo frame ── */}
          <div className="lg:col-span-6 relative">

            {/* Decorative corner bracket top-left */}
            <div
              aria-hidden
              className="absolute -left-5 -top-5 w-12 h-12 pointer-events-none z-20"
              style={{
                borderTop: "2px solid var(--color-secondary)",
                borderLeft: "2px solid var(--color-secondary)",
              }}
            />
            {/* Decorative corner bracket bottom-right */}
            <div
              aria-hidden
              className="absolute -right-5 -bottom-5 w-12 h-12 pointer-events-none z-20"
              style={{
                borderBottom: "2px solid var(--color-secondary)",
                borderRight: "2px solid var(--color-secondary)",
              }}
            />

            {/* Primary photo — gold-foil bordered */}
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{
                boxShadow:
                  "8px 16px 48px rgba(106,30,44,0.18), 0 0 0 1px color-mix(in srgb, var(--color-secondary) 40%, transparent)",
              }}
            >
              <img
                src={primaryImage}
                alt=""
                aria-hidden
                className="w-full object-cover"
                style={{ height: "clamp(320px, 45vw, 480px)", objectPosition: "center top" }}
              />
              {/* Inner bottom gradient */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(23,17,18,0.65) 0%, transparent 50%)",
                }}
              />
              {/* Eyebrow repeat on image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <span
                  className="text-[0.62rem] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Hibiscus Dotage Foundation · Zimbabwe
                </span>
              </div>
            </div>

            {/* Floating polaroid secondary card */}
            {secondaryImage && (
              <div
                className="float-card absolute -bottom-8 -left-8 md:-left-12 z-30 bg-white p-3 shadow-2xl"
                style={{
                  width: "clamp(130px, 18vw, 190px)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  boxShadow:
                    "0 16px 48px rgba(106,30,44,0.22), 0 0 0 1px color-mix(in srgb, var(--color-secondary) 25%, transparent)",
                }}
              >
                <div className="overflow-hidden bg-muted" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={secondaryImage}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-1.5 pb-0.5 text-center">
                  <span
                    className="text-[0.52rem] uppercase tracking-[0.18em] font-semibold"
                    style={{ color: "var(--color-muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    Zimbabwe · 2024
                  </span>
                </div>
              </div>
            )}

            {/* Gold badge circle */}
            {badge && (
              <div
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-40 flex flex-col items-center justify-center rounded-full border-4 border-white text-center"
                style={{
                  width: "clamp(74px, 9vw, 100px)",
                  height: "clamp(74px, 9vw, 100px)",
                  background: "var(--color-primary)",
                  boxShadow: "0 8px 32px rgba(106,30,44,0.35)",
                }}
              >
                <span
                  className="font-serif font-bold leading-none"
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {badge.value}
                </span>
                <span
                  className="text-[0.45rem] uppercase tracking-wider mt-0.5 font-semibold px-1 leading-tight"
                  style={{ color: "white" }}
                >
                  {badge.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
