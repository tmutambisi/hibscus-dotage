import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { useCountUp } from "@/lib/use-reveal";

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useCountUp(value);
  return (
    <div>
      <div className="flex items-baseline gap-1 font-serif text-3xl md:text-4xl text-primary-foreground">
        <span ref={ref}>0</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground/70">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A young volunteer holding the hands of an elder on a porch in rural Zimbabwe"
          width={1920}
          height={1280}
          className="h-full w-full object-cover kenburns"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(23,17,18,0.20) 0%, rgba(23,17,18,0.10) 40%, rgba(23,17,18,0.75) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(23,17,18,0.55) 0%, rgba(23,17,18,0.20) 50%, rgba(23,17,18,0) 80%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between pt-32 pb-12">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <span className="rule-gold" style={{ background: "var(--color-secondary)" }} />
              <span className="text-[0.72rem] uppercase tracking-[0.28em]">
                Hibiscus Dotage Foundation · Zimbabwe
              </span>
            </div>
            <h1 className="mt-8 font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] text-primary-foreground tracking-tight">
              Young <em className="not-italic text-[color:var(--color-secondary)]">for</em> the
              <br /> Elderly.
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-primary-foreground/85">
              A youth-led movement restoring dignity to how Africa treats its elders.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors"
                style={{ background: "var(--color-secondary)", color: "#232323" }}
              >
                Volunteer With Us
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-primary-foreground border border-white/40 hover:border-white transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>

        <div className="container-editorial">
          <div className="mt-24 grid grid-cols-3 gap-6 border-t border-white/15 pt-8 max-w-2xl">
            <Stat value={600} suffix="+" label="Volunteers" />
            <Stat value={80} suffix="+" label="Elders Reached" />
            <Stat value={5} suffix="+" label="Communities" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-center gap-3 text-primary-foreground/70">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="block h-10 w-px bg-primary-foreground/40" />
      </div>
    </section>
  );
}
