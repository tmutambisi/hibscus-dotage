import type { ReactNode } from "react";
import pageHeroImg from "@/assets/page-hero.jpg";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  image = pageHeroImg,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 border-b border-border overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover kenburns"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(106,30,44,0.55) 0%, rgba(106,30,44,0.35) 55%, rgba(23,17,18,0.65) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(23,17,18,0.65) 0%, rgba(23,17,18,0.25) 55%, rgba(23,17,18,0) 85%)",
        }}
      />
      <div className="container-editorial relative">
        <div className="max-w-4xl">
          <div className="eyebrow" style={{ color: "var(--color-secondary)" }}>
            <span className="rule-gold" />
            {eyebrow}
          </div>
          <h1
            className="mt-8 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-tight"
            style={{ color: "var(--primary-foreground)" }}
          >
            {title}
          </h1>
          {lede && (
            <p
              className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed"
              style={{ color: "rgba(250,249,247,0.92)", textShadow: "0 1px 12px rgba(23,17,18,0.55)" }}
            >
              {lede}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
