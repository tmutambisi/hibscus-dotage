import hands from "@/assets/hands.jpg";
import story1 from "@/assets/story-1.jpg";
import { useReveal } from "@/lib/use-reveal";

const pillars = [
  {
    tag: "I.",
    name: "Golden Grit",
    desc: "Restoring purpose and livelihood to elders through skills exchange, small enterprise, and dignified work partnerships.",
  },
  {
    tag: "II.",
    name: "SilverCare",
    desc: "In-home visits, health check-ins and companionship — a standing promise that no elder is forgotten.",
  },
  {
    tag: "III.",
    name: "Ubumbano",
    desc: "Community reweaving. Gatherings, feasts and story circles that place elders back at the centre of village life.",
  },
  {
    tag: "IV.",
    name: "Muzukuru Project",
    desc: "The grandchild programme. Long-term youth mentorships that pair one young volunteer with one elder for the season.",
  },
];

export function About() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  return (
    <section id="about" className="relative py-32 md:py-48 bg-background">
      <div className="container-editorial">
        <div ref={r1} className="reveal grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="eyebrow"><span className="rule-gold" />About</div>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl leading-[1.05]">
              A quiet revolution, carried by the young.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-[1.06rem] leading-[1.85] text-foreground/90">
            <p>
              Hibiscus Dotage Foundation was born from a simple observation: across Africa,
              the wisest among us are quietly being edged out of the room. We are the
              generation that decided to stay in the room with them.
            </p>
            <p>
              We are a youth-led, Zimbabwe-rooted movement working at the meeting point of
              dignity and design — building an intergenerational infrastructure so that
              growing old is met with care, purpose, and belonging.
            </p>
          </div>
        </div>

        <div ref={r2} className="reveal mt-28 md:mt-40 grid md:grid-cols-12 gap-10 items-center">
          <figure className="md:col-span-7 relative">
            <div className="reveal-image is-visible overflow-hidden">
              <img
                src={hands}
                alt="Young and elder hands intertwined on a woven blanket"
                width={1600}
                height={1104}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground italic">
              A grandchild's hand. An elder's hand. The whole architecture of a village.
            </figcaption>
          </figure>
          <blockquote className="md:col-span-5">
            <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
              &ldquo;When an elder in Africa dies, a library burns. We are not going to let
              another library burn on our watch.&rdquo;
            </p>
            <footer className="mt-6 text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground">
              — The Founding Circle, 2019
            </footer>
          </blockquote>
        </div>

        <div ref={r3} className="reveal mt-32 md:mt-48">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow"><span className="rule-gold" />The Tripartite Intervention System</div>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl max-w-2xl leading-tight">
                Four programmes. One promise: no elder walks alone.
              </h3>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Each pillar can stand on its own. Together, they form the scaffolding of a
              generation that shows up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {pillars.map((p) => (
              <article
                key={p.name}
                className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[280px] transition-colors duration-500 hover:bg-muted"
              >
                <div>
                  <div className="font-serif text-sm text-[color:var(--color-secondary)] tracking-widest">
                    {p.tag}
                  </div>
                  <h4 className="mt-4 font-serif text-2xl">{p.name}</h4>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-foreground/80">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-8 h-px w-8 bg-[color:var(--color-secondary)] transition-all duration-500 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-32 md:mt-40 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 md:order-2">
            <div className="eyebrow"><span className="rule-gold" />Our Roots</div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              Rooted in Zimbabwe. Reaching across the continent.
            </h3>
            <p className="mt-6 text-foreground/85 leading-[1.85]">
              From Harare's high-density suburbs to the quiet paths of Manicaland, we walk
              village by village — not to save, but to sit. To listen. To restore what was
              never meant to be lost.
            </p>
          </div>
          <figure className="md:col-span-7 md:order-1">
            <img
              src={story1}
              alt="A young woman helps an elder with the morning wash outside a rural home"
              width={1408}
              height={1760}
              loading="lazy"
              className="w-full h-[520px] md:h-[640px] object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
