import { useState } from "react";
import { useCountUp, useReveal } from "@/lib/use-reveal";

type Pin = {
  id: string;
  name: string;
  region: string;
  x: number; // percent
  y: number; // percent
  elders: number;
  volunteers: number;
  story: string;
};

const pins: Pin[] = [
  { id: "har", name: "Harare", region: "Mashonaland", x: 55, y: 46, elders: 32, volunteers: 210, story: "Our first chapter. Weekly visits across Mbare, Highfield and Epworth." },
  { id: "byo", name: "Bulawayo", region: "Matabeleland", x: 28, y: 68, elders: 18, volunteers: 140, story: "Ubumbano gatherings each month with elders from Nkulumane and Cowdray Park." },
  { id: "mut", name: "Mutare", region: "Manicaland", x: 78, y: 55, elders: 14, volunteers: 96, story: "Muzukuru pairs walking the villages of Sakubva and Chikanga." },
  { id: "gwe", name: "Gweru", region: "Midlands", x: 46, y: 60, elders: 9, volunteers: 78, story: "Golden Grit skills exchange with fifteen elder artisans." },
  { id: "mas", name: "Masvingo", region: "Masvingo", x: 60, y: 72, elders: 7, volunteers: 62, story: "SilverCare mobile clinic partnership launched this year." },
];

function CountStat({ n, suffix, label }: { n: number; suffix?: string; label: string }) {
  const ref = useCountUp(n, 1800);
  return (
    <div>
      <div className="flex items-baseline gap-1 font-serif text-5xl md:text-6xl text-foreground">
        <span ref={ref}>0</span>
        {suffix && <span className="text-[color:var(--color-secondary)]">{suffix}</span>}
      </div>
      <div className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function Impact() {
  const [active, setActive] = useState<Pin>(pins[0]);
  const r = useReveal();

  return (
    <section id="impact" className="relative py-32 md:py-40 bg-muted/40">
      <div className="container-editorial">
        <div ref={r} className="reveal grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <div className="eyebrow"><span className="rule-gold" />Impact</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              A map of a movement.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-[1.05rem] leading-[1.85] text-foreground/80">
            These are not numbers. They are Wednesday afternoons on a porch in Mbare.
            A neighbour's medicine collected in Bulawayo. A song remembered in Mutare
            that would otherwise have vanished.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-start">
          <div className="md:col-span-7 relative bg-background border border-border aspect-[4/5] md:aspect-[5/4] overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full opacity-[0.9]"
              preserveAspectRatio="none"
              aria-hidden
            >
              {/* Stylised Zimbabwe outline */}
              <path
                d="M18,32 L42,22 L58,20 L72,24 L84,32 L88,44 L86,58 L78,72 L64,80 L48,84 L34,80 L22,72 L14,58 L12,44 Z"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="0.4"
              />
              <path
                d="M18,32 L42,22 L58,20 L72,24 L84,32 L88,44 L86,58 L78,72 L64,80 L48,84 L34,80 L22,72 L14,58 L12,44 Z"
                fill="color-mix(in srgb, var(--color-primary) 5%, transparent)"
                stroke="var(--color-primary)"
                strokeWidth="0.25"
                strokeDasharray="1 1.5"
              />
              {/* Animated routes between pins */}
              {pins.slice(0, -1).map((p, i) => {
                const q = pins[i + 1];
                return (
                  <line
                    key={p.id + q.id}
                    x1={p.x}
                    y1={p.y}
                    x2={q.x}
                    y2={q.y}
                    stroke="var(--color-secondary)"
                    strokeWidth="0.15"
                    strokeDasharray="0.8 1.4"
                    opacity="0.7"
                  />
                );
              })}
            </svg>

            {pins.map((p) => {
              const isActive = p.id === active.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  aria-label={`${p.name}, ${p.region}`}
                >
                  <span
                    className={`absolute inset-0 -m-4 rounded-full transition-opacity duration-500 ${
                      isActive ? "opacity-100 animate-ping" : "opacity-0"
                    }`}
                    style={{ background: "color-mix(in srgb, var(--color-primary) 25%, transparent)" }}
                  />
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      isActive ? "h-3.5 w-3.5" : "h-2 w-2 group-hover:h-3 group-hover:w-3"
                    }`}
                    style={{
                      background: isActive ? "var(--color-primary)" : "var(--color-secondary)",
                      boxShadow: isActive
                        ? "0 0 0 6px color-mix(in srgb, var(--color-primary) 12%, transparent)"
                        : "none",
                    }}
                  />
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.18em] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                    }`}
                  >
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>

          <aside className="md:col-span-5">
            <div className="border border-border bg-background p-8 md:p-10">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)]">
                {active.region}
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">{active.name}</h3>
              <p className="mt-5 text-foreground/85 leading-relaxed">{active.story}</p>
              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="font-serif text-3xl">{active.elders}</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Elders in care
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl">{active.volunteers}</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Active volunteers
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 divide-y divide-border border-t border-b border-border">
              {pins.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className={`w-full text-left py-4 flex items-center justify-between transition-colors ${
                      p.id === active.id ? "text-primary" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <span className="text-sm tracking-wide">{p.name}</span>
                    <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {p.region}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-28 md:mt-36 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 border-t border-border pt-16">
          <CountStat n={600} suffix="+" label="Youth Volunteers" />
          <CountStat n={80} suffix="+" label="Elders Reached" />
          <CountStat n={12000} suffix="+" label="Hours of Presence" />
          <CountStat n={5} suffix="" label="Communities Rooted" />
        </div>
      </div>
    </section>
  );
}
