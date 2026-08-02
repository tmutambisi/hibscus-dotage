import { Link } from "@tanstack/react-router";
import story2 from "@/assets/hibscuss/vol3.jpeg";
import reading from "@/assets/hibscuss/reading.jpeg";
import hands from "@/assets/hands.jpg";
import story1 from "@/assets/potrait.jpeg";
import portrait from "@/assets/hibscuss/hero.jpeg";
import childImg from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.20.jpeg";
import volMainImg from "@/assets/volunteers/main.jpeg";
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
      className="reveal container-editorial grid md:grid-cols-12 gap-8 md:gap-16 items-center py-20 md:py-28 border-t border-border"
    >
      <figure className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="w-full h-[380px] md:h-[550px] object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.03]"
          />
        </div>
      </figure>
      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <div className="font-serif text-sm tracking-widest text-[color:var(--color-secondary)]">
          {item.n} — {item.kicker}
        </div>
        <h3 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">{item.title}</h3>
        <p className="mt-6 text-[1.05rem] leading-[1.85] text-foreground/85">{item.body}</p>
        <Link to="/involved" className="mt-8 inline-flex items-center gap-3 group">
          <span className="text-[0.78rem] uppercase tracking-[0.22em] font-medium">Learn More</span>
          <span
            className="block h-px w-10 transition-all duration-500 group-hover:w-20"
            style={{ background: "var(--color-primary)" }}
          />
        </Link>
      </div>
    </article>
  );
}

export function Work() {
  const rP = useReveal();

  return (
    <section id="work" className="bg-background pt-24 md:pt-32">
      {/* 3 Core Programmes Eye-Catching Cards */}
      <div ref={rP} className="reveal container-editorial mb-24">
        <div className="eyebrow"><span className="rule-gold" />Our Three Core Pillars</div>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] max-w-3xl">
          Explore Our Programmes
        </h2>
        <p className="mt-4 text-foreground/80 text-lg max-w-2xl">
          Click on any programme below to discover in-depth manifesto, initiatives, and community impact.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Card 1: Interwoven Lives */}
          <div className="group border border-border bg-background flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
            <div className="h-56 overflow-hidden relative">
              <img src={childImg} alt="Interwoven Lives - Children and elderly" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 bg-[color:var(--color-primary)] text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-semibold">
                Programme I
              </span>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Interwoven Lives</h3>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-secondary)] font-semibold">
                  Muzukuru Project &amp; Dotage Dream Fund
                </p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  Supporting children under the care of elderly guardians through school fees ($30/term), uniforms, and household relief.
                </p>
              </div>
              <Link
                to="/interwoven"
                className="mt-8 inline-flex items-center justify-between w-full pt-4 border-t border-border text-xs uppercase tracking-widest text-[color:var(--color-primary)] font-semibold group-hover:text-[color:var(--color-secondary)] transition-colors"
              >
                <span>Read Full Manifesto</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Volunteer Philosophy */}
          <div className="group border border-border bg-background flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
            <div className="h-56 overflow-hidden relative">
              <img src={volMainImg} alt="Volunteer Philosophy - Youth aspect" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 bg-[color:var(--color-primary)] text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-semibold">
                Programme II
              </span>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Volunteer Philosophy</h3>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-secondary)] font-semibold">
                  Youth Leadership &amp; Purpose
                </p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  Volunteering at Hibiscus is a deliberate journey of self-discovery. Relational leadership, Ubuntu values, and 6 stages of growth.
                </p>
              </div>
              <Link
                to="/volunteer"
                className="mt-8 inline-flex items-center justify-between w-full pt-4 border-t border-border text-xs uppercase tracking-widest text-[color:var(--color-primary)] font-semibold group-hover:text-[color:var(--color-secondary)] transition-colors"
              >
                <span>Discover Volunteer DNA</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Card 3: The Elderly */}
          <div className="group border border-border bg-background flex flex-col justify-between overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
            <div className="h-56 overflow-hidden relative">
              <img src={portrait} alt="The Elderly - Dignity and care" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 bg-[color:var(--color-primary)] text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-semibold">
                Programme III
              </span>
            </div>
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">The Elderly Aspect</h3>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-secondary)] font-semibold">
                  SilverCare, Golden Grit &amp; Ubumbano
                </p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  In-home health visits, medical outreach, longevity enterprise, circles of care, and elderly inmate advocacy.
                </p>
              </div>
              <Link
                to="/elderly"
                className="mt-8 inline-flex items-center justify-between w-full pt-4 border-t border-border text-xs uppercase tracking-widest text-[color:var(--color-primary)] font-semibold group-hover:text-[color:var(--color-secondary)] transition-colors"
              >
                <span>View Elder Care Doorways</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 border-t border-border pt-16">
          <div className="md:col-span-4">
            <div className="eyebrow"><span className="rule-gold" />What We Do Every Week</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.02]">
              Five ways of showing up.
              <br />
              <span className="text-muted-foreground">Every week. Every elder. Every season.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-20">
        {items.map((it, i) => (
          <Row key={it.n} item={it} index={i} />
        ))}
      </div>
    </section>
  );
}

