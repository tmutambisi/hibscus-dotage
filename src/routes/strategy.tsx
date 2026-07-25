import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { PhotoGallery } from "@/components/site/PhotoGallery";

export const Route = createFileRoute("/strategy")({
  head: () => ({
    meta: [
      { title: "Our Strategy — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "A tripartite, skills-driven, volunteer-led system linking elders, youth, and children under elder care.",
      },
      { property: "og:title", content: "Our Strategy — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "A tripartite, skills-driven, volunteer-led system.",
      },
    ],
  }),
  component: StrategyPage,
});

const values = [
  { name: "Respect & Dignity", body: "For elders and caregivers alike." },
  { name: "Empowerment", body: "Youth and community-led initiatives." },
  { name: "Intergenerational Solidarity", body: "Building bridges between generations." },
  { name: "Sustainability", body: "Creating lasting, generational impact." },
  { name: "Collective Responsibility", body: "Community care as a shared duty." },
];

const tripartite = [
  {
    who: "The Elderly — Dignity & Care",
    details:
      "Emotional support, social inclusion, wellness checks, storytelling, household assistance, Circles of Care (Ubumbano).",
    outcome: "Elders feel valued; families and communities stabilise.",
  },
  {
    who: "The Youth — Skills & Purpose",
    details:
      "Leadership, care, community engagement, storytelling, digital literacy, intergenerational communication.",
    outcome: "Youth gain skills, purpose, and lead meaningful community change.",
  },
  {
    who: "Children Under Elder Care — Support & Opportunity",
    details:
      "Household stability, psychosocial support, mentorship, nutrition, education support.",
    outcome: "Safer, more resilient children and households.",
  },
];

function StrategyPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Our Strategy"
        title={
          <>
            Rooted in skills.<br />
            Driven by volunteerism.
          </>
        }
        lede="Communities flourish when generations stand with each other, not apart. Our model is a Tripartite Intervention System — because their lives are interconnected, and so must be our solutions."
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="eyebrow"><span className="rule-gold" />Who We Are</div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
              A community-driven organisation.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-[1.06rem] leading-[1.85] text-foreground/90">
            <p>
              Hibiscus Dotage Foundation is committed to restoring dignity, strengthening
              intergenerational ties, and improving the well-being of older persons. We
              work with youth, elders, and children under elder care to create resilient,
              caring communities.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground">
              Vision — a world where elders are honored, youth are empowered, and every
              generation thrives together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container-editorial">
          <div className="mb-14 max-w-2xl">
            <div className="eyebrow"><span className="rule-gold" />Our Values</div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              Five commitments we keep.
            </h3>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-border">
            {values.map((v, i) => (
              <article key={v.name} className="bg-background p-8 min-h-[220px]">
                <div className="font-serif text-sm text-[color:var(--color-secondary)] tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-3 font-serif text-xl leading-tight">{v.name}</h4>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/80">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial">
          <div className="mb-14 max-w-3xl">
            <div className="eyebrow"><span className="rule-gold" />The Tripartite System</div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              A tripartite, <span className="text-[color:var(--color-secondary)]">skills-driven</span>, volunteer-led system.
            </h3>
            <p className="mt-6 text-foreground/85 leading-[1.85]">
              Every intervention we design strengthens all three pillars — because their
              lives are interconnected.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-12 gap-6 py-4 border-b border-border">
            <div className="col-span-3 eyebrow">Projects</div>
            <div className="col-span-6 eyebrow">Details</div>
            <div className="col-span-3 eyebrow">Outcome</div>
          </div>

          {tripartite.map((row) => (
            <div
              key={row.who}
              className="grid md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-border"
            >
              <h4 className="md:col-span-3 font-serif text-xl md:text-2xl leading-snug">
                {row.who}
              </h4>
              <p className="md:col-span-6 text-foreground/85 leading-[1.85]">
                {row.details}
              </p>
              <p className="md:col-span-3 text-foreground/85 leading-[1.75] italic">
                {row.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
        <div className="container-editorial max-w-3xl">
          <div className="eyebrow" style={{ color: "var(--color-secondary)" }}>
            <span className="rule-gold" />How We Work
          </div>
          <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
            People at the centre.
          </h3>
          <ul className="mt-10 space-y-6 text-[1.05rem] leading-[1.85]">
            <li><strong className="text-[color:var(--color-secondary)]">Community ownership</strong> — everyone participates in care.</li>
            <li><strong className="text-[color:var(--color-secondary)]">Sustainability</strong> — programmes designed to last.</li>
            <li><strong className="text-[color:var(--color-secondary)]">Inclusivity</strong> — vulnerable groups are prioritised.</li>
            <li><strong className="text-[color:var(--color-secondary)]">Measurable impact</strong> — actions that improve lives.</li>
          </ul>
        </div>
      </section>

      <PhotoGallery
        eyebrow="Strategy in motion"
        title="The three pillars, seen at work."
        columns={3}
        imageOffset={3}
        items={[
          { caption: "Elders — dignity & care" },
          { caption: "Youth — skills & purpose" },
          { caption: "Children under elder care" },
        ]}
      />
    </SiteFrame>
  );
}
