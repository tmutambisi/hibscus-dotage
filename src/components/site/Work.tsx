import story2 from "@/assets/story-2.jpg";
import reading from "@/assets/reading.jpg";
import hands from "@/assets/hands.jpg";
import story1 from "@/assets/story-1.jpg";
import portrait from "@/assets/portrait.jpg";
import { useReveal } from "@/lib/use-reveal";

type Item = {
  n: string;
  title: string;
  kicker: string;
  body: string;
  image: string;
  imageAlt: string;
};

const items: Item[] = [
  {
    n: "01",
    title: "Home Visits",
    kicker: "Presence, weekly",
    body:
      "A trained young volunteer arrives every week. They sweep. They cook. They stay. Presence is our first medicine — and often the one that lasts longest.",
    image: story1,
    imageAlt: "A volunteer washing clothes for an elder outside her home",
  },
  {
    n: "02",
    title: "Health & Wellbeing",
    kicker: "Silent monitoring, loud dignity",
    body:
      "Blood pressure checks, medication reminders, mobility support, referrals — coordinated with clinics and quietly documented. Care that respects privacy.",
    image: portrait,
    imageAlt: "Portrait of an elder in warm window light",
  },
  {
    n: "03",
    title: "Story & Memory",
    kicker: "An archive of a generation",
    body:
      "We record the recipes, the songs, the migrations, the wars survived. A living archive of Zimbabwean elderhood — for the grandchildren not yet born.",
    image: reading,
    imageAlt: "A young volunteer reading with a smiling elder",
  },
  {
    n: "04",
    title: "Community Gatherings",
    kicker: "Elders back at the centre",
    body:
      "Feasts, storytelling nights, birthday celebrations. Because loneliness is a public-health emergency — and joy, a legitimate response.",
    image: story2,
    imageAlt: "Youth volunteers walking with elders down a village path at sunset",
  },
  {
    n: "05",
    title: "Youth Formation",
    kicker: "Raising the next generation of citizens",
    body:
      "Every volunteer completes training in listening, ethics, first-aid and heritage. The work changes the elder. It also, quietly, remakes the young.",
    image: hands,
    imageAlt: "Two hands — young and old — resting intertwined",
  },
];

function Row({ item, index }: { item: Item; index: number }) {
  const ref = useReveal();
  const reverse = index % 2 === 1;
  return (
    <article
      ref={ref}
      className="reveal container-editorial grid md:grid-cols-12 gap-8 md:gap-16 items-center py-24 md:py-32 border-t border-border"
    >
      <figure className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="w-full h-[420px] md:h-[620px] object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.03]"
          />
        </div>
      </figure>
      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <div className="font-serif text-sm tracking-widest text-[color:var(--color-secondary)]">
          {item.n} — {item.kicker}
        </div>
        <h3 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">{item.title}</h3>
        <p className="mt-6 text-[1.05rem] leading-[1.85] text-foreground/85">{item.body}</p>
        <a href="/involved" className="mt-10 inline-flex items-center gap-3 group">
          <span className="text-[0.78rem] uppercase tracking-[0.22em]">Learn More</span>
          <span
            className="block h-px w-10 transition-all duration-500 group-hover:w-20"
            style={{ background: "var(--color-primary)" }}
          />
        </a>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="bg-background pt-24 md:pt-32">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="eyebrow"><span className="rule-gold" />What We Do</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.02]">
              Five ways of showing up.
              <br />
              <span className="text-muted-foreground">Every week. Every elder. Every season.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        {items.map((it, i) => (
          <Row key={it.n} item={it} index={i} />
        ))}
      </div>
    </section>
  );
}
