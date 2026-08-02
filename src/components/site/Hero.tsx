"use client";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCountUp } from "@/lib/use-reveal";

/* ── Asset imports ─────────────────────────────────────────── */
import volMainImg from "@/assets/volunteers/main.jpeg";
import heroImg from "@/assets/hibscuss/hero.jpeg";
import elderImg from "@/assets/hibscuss/reading.jpeg";
import childImg from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.20.jpeg";
import vol2Img from "@/assets/volunteers/WhatsApp Image 2026-07-26 at 19.42.03.jpeg";

/* ── Stat counter ──────────────────────────────────────────── */
function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useCountUp(value);
  return (
    <div className="text-center md:text-left">
      <div className="flex items-baseline justify-center md:justify-start gap-0.5 font-serif text-4xl md:text-5xl leading-none" style={{ color: "var(--color-primary)" }}>
        <span ref={ref}>0</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="mt-1.5 text-[0.65rem] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--color-muted-foreground)" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Department pills data ─────────────────────────────────── */
const departments = [
  { label: "Interwoven Lives",  sub: "Muzukuru & Elder Caregivers", link: "/interwoven",  img: childImg    },
  { label: "Youth Movement",    sub: "Volunteer Philosophy & Training", link: "/volunteer",  img: vol2Img     },
  { label: "Elderly Welfare",   sub: "SilverCare · Ubumbano · Golden Grit", link: "/elderly",   img: elderImg    },
] as const;

/* ── Hero ──────────────────────────────────────────────────── */
export function Hero() {
  const [activeDept, setActiveDept] = useState(0);

  const primaryImg  = departments[activeDept].img;
  const secondaryImg = activeDept === 0 ? volMainImg : activeDept === 1 ? elderImg : vol2Img;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background border-b border-border"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Subtle paper-texture noise overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="container-editorial relative z-10 flex flex-col justify-between" style={{ minHeight: "100svh", paddingTop: "6rem", paddingBottom: "3rem" }}>

        {/* ══════════════════════════════════════════════
            MAIN: 2-column editorial split
        ══════════════════════════════════════════════ */}
        <div className="mt-10 grid lg:grid-cols-12 gap-10 xl:gap-16 items-center flex-1">

          {/* ── LEFT: Headline column ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="rule-gold" />
              <span
                className="text-[0.7rem] uppercase tracking-[0.26em] font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Hibiscus Dotage Foundation
              </span>
            </div>

            {/* Hero headline — Cormorant Garamond, massive */}
            <h1
              className="font-serif leading-[0.96] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)", color: "var(--color-foreground)" }}
            >
              Young{" "}
              <em
                className="not-italic"
                style={{ color: "var(--color-primary)" }}
              >
                for
              </em>{" "}
              the Elderly.
              <br />
              <span className="relative inline-block">
                <span style={{ color: "var(--color-secondary)" }}>Building</span>{" "}
                <span>Dignity</span>
                {/* Gold underline accent */}
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 w-full"
                  style={{
                    height: "2px",
                    background: "linear-gradient(90deg, var(--color-secondary) 0%, transparent 100%)",
                  }}
                />
              </span>
              <br />
              across generations.
            </h1>

            {/* Sub-description */}
            <p
              className="max-w-md text-lg leading-relaxed"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              A youth-led movement restoring{" "}
              <strong style={{ color: "var(--color-foreground)", fontWeight: 500 }}>
                intergenerational dignity
              </strong>{" "}
              across Zimbabwe — one elder, one child, one volunteer at a time.
            </p>

            {/* ── Department pills ── */}
            <div>
              <p
                className="mb-3 text-[0.65rem] uppercase tracking-[0.22em] font-semibold"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Our Three Aspects —
              </p>
              <div className="flex flex-wrap gap-2">
                {departments.map((d, i) => (
                  <button
                    key={d.label}
                    type="button"
                    onClick={() => setActiveDept(i)}
                    className={`dept-pill${activeDept === i ? " active" : ""}`}
                    aria-pressed={activeDept === i}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              {/* Dynamic sub-label for active pill */}
              <p
                className="mt-2.5 text-[0.72rem] tracking-wide transition-all duration-500"
                style={{ color: "var(--color-primary)", fontStyle: "italic" }}
              >
                {departments[activeDept].sub}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link to={departments[activeDept].link} className="btn-primary">
                Explore {departments[activeDept].label} →
              </Link>
              <Link to="/donate" className="btn-ghost">
                Give a Gift
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Asymmetric layered photo frame ── */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Decorative serif watermark */}
            <div
              aria-hidden
              className="pointer-events-none select-none absolute -top-8 -right-4 font-serif leading-none opacity-[0.04] font-bold"
              style={{ fontSize: "clamp(10rem, 18vw, 18rem)", color: "var(--color-primary)", zIndex: 0 }}
            >
              HDF
            </div>

            {/* Decorative corner lines */}
            <div
              aria-hidden
              className="absolute -left-6 -top-6 w-16 h-16 pointer-events-none z-20"
              style={{ borderTop: "2px solid var(--color-secondary)", borderLeft: "2px solid var(--color-secondary)" }}
            />
            <div
              aria-hidden
              className="absolute -right-6 -bottom-6 w-16 h-16 pointer-events-none z-20"
              style={{ borderBottom: "2px solid var(--color-secondary)", borderRight: "2px solid var(--color-secondary)" }}
            />

            {/* ── Primary large photo card ── */}
            <div
              className="gold-frame relative overflow-hidden shadow-2xl transition-all duration-700 z-10"
              style={{
                background: "var(--color-muted)",
                borderRadius: 0,
                boxShadow: "8px 16px 48px rgba(106,30,44,0.18), 0 0 0 1px color-mix(in srgb, var(--color-secondary) 40%, transparent)",
              }}
            >
              <img
                key={`primary-${activeDept}`}
                src={primaryImg}
                alt={`${departments[activeDept].label} — Hibiscus Dotage Foundation`}
                className="w-full object-cover transition-all duration-700"
                style={{ height: "clamp(360px, 50vw, 520px)", objectPosition: "center top" }}
              />
              {/* Inner gradient vignette for text legibility */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(23,17,18,0.7) 0%, transparent 55%)",
                }}
              />
              {/* Department label bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div
                  className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <span className="live-dot" style={{ background: "var(--color-secondary)" }} />
                  {departments[activeDept].label}
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-white/90">
                  {departments[activeDept].sub}
                </p>
              </div>
            </div>

            {/* ── Floating polaroid secondary card ── */}
            <div
              className="float-card absolute -bottom-10 -left-8 md:-left-14 z-30 bg-white p-3 shadow-2xl"
              style={{
                width: "clamp(140px, 20vw, 210px)",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 20px 60px rgba(106,30,44,0.22), 0 0 0 1px color-mix(in srgb, var(--color-secondary) 30%, transparent)",
              }}
            >
              <div className="overflow-hidden bg-muted" style={{ aspectRatio: "4/3" }}>
                <img
                  src={secondaryImg}
                  alt="Hibiscus Dotage Foundation community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 pb-1 text-center">
                <span
                  className="text-[0.55rem] uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "var(--color-muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  Zimbabwe · 2024
                </span>
              </div>
            </div>

            {/* ── Gold badge circle ── */}
            <div
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-40 flex flex-col items-center justify-center rounded-full border-4 border-white text-center"
              style={{
                width: "clamp(80px, 10vw, 110px)",
                height: "clamp(80px, 10vw, 110px)",
                background: "var(--color-primary)",
                boxShadow: "0 8px 32px rgba(106,30,44,0.35)",
              }}
            >
              <span
                className="font-serif font-bold leading-none"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: "var(--color-secondary)" }}
              >
                600+
              </span>
              <span
                className="text-[0.48rem] uppercase tracking-wider mt-0.5 font-semibold px-1 leading-tight"
                style={{ color: "white" }}
              >
                Volunteers
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            BOTTOM: Stats bar
        ══════════════════════════════════════════════ */}
        <div
          className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <Stat value={600}  suffix="+"      label="Active Volunteers" />
          <Stat value={80}   suffix="+"      label="Elder Households" />
          <Stat value={500}  suffix="+"      label="Outreach Reached" />
          <Stat value={30}   suffix="$/term" label="Muzukuru Sponsorship" />
        </div>
      </div>
    </section>
  );
}
