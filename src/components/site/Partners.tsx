import { useReveal } from "@/lib/use-reveal";

const partners = [
  { name: "University of Zimbabwe", type: "Research" },
  { name: "Ministry of Public Service", type: "Government" },
  { name: "Econet Wireless", type: "Corporate" },
  { name: "Red Cross Zimbabwe", type: "NGO" },
  { name: "Africa University", type: "Research" },
  { name: "Higherlife Foundation", type: "NGO" },
  { name: "OK Zimbabwe", type: "Corporate" },
  { name: "Ministry of Health", type: "Government" },
];

export function Partners() {
  const r = useReveal();
  const loop = [...partners, ...partners];
  return (
    <section className="py-28 md:py-36 bg-muted/40 border-t border-border overflow-hidden">
      <div className="container-editorial">
        <div ref={r} className="reveal grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <div className="eyebrow"><span className="rule-gold" />Partners & Institutions</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              Held up by many hands.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-foreground/80 leading-relaxed">
            We work in trust with universities, government agencies, corporate
            citizens, faith communities and grassroots collectives. Each partner
            brings a specific gift — none of them, alone, could carry the work.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--color-muted), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--color-muted), transparent)" }}
        />
        <div className="flex marquee-track" style={{ width: "200%" }}>
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group flex-shrink-0 px-10 py-8 flex flex-col justify-center border-r border-border min-w-[280px]"
            >
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                {p.type}
              </div>
              <div className="mt-2 font-serif text-2xl text-foreground/85 group-hover:text-primary transition-colors duration-500">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-editorial mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-border pt-10">
        <h3 className="font-serif text-2xl md:text-3xl max-w-xl">
          Start a partnership conversation.
        </h3>
        <a href="/involved" className="btn-primary self-start md:self-auto">
          Write to Us
        </a>
      </div>
    </section>
  );
}
