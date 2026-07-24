import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { PhotoGallery } from "@/components/site/PhotoGallery";

export const Route = createFileRoute("/chairman")({
  head: () => ({
    meta: [
      { title: "Message from the Chairman — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "The Chairman of Hibiscus Dotage Foundation on why we chose to stand with those who once stood for all of us.",
      },
      { property: "og:title", content: "Message from the Chairman — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "Why we chose to stand with those who once stood for all of us.",
      },
    ],
  }),
  component: ChairmanPage,
});

const pillars = [
  {
    tag: "Golden Grit",
    body:
      "For elders who are able-bodied and still eager to contribute. We champion the longevity economy — where elders are active contributors, not passive recipients.",
  },
  {
    tag: "SilverCare",
    body:
      "For elders who are sick, disabled, or living without support. We fundraise, advocate and provide essential medical assistance.",
  },
  {
    tag: "Ubumbano — Circles of Care",
    body:
      "For elders who suffer deep loneliness. We surround them with presence, love and community.",
  },
  {
    tag: "Elderly Inmates",
    body:
      "For elders behind bars. We remind them that dignity does not expire.",
  },
  {
    tag: "Muzukuru Project",
    body:
      "For elders raising grandchildren. We support those children with fees, mentorship and care — because the wellbeing of a child is intertwined with the wellbeing of the elder who raises them.",
  },
];

function ChairmanPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Message from the Chairman"
        title={
          <>
            Young for<br />
            the Elderly.
          </>
        }
        lede="It is my honour and profound privilege to give you account of what happens when young people choose to stand with those who once stood for all of us."
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16">
          <aside className="md:col-span-4">
            <div className="eyebrow"><span className="rule-gold" />A Letter</div>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              An uncomfortable question, an unshakeable answer.
            </h2>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              — The Chairman<br />Hibiscus Dotage Foundation
            </p>
          </aside>

          <div className="md:col-span-7 md:col-start-6 space-y-6 text-[1.06rem] leading-[1.85] text-foreground/90">
            <p>
              Hibiscus Dotage Foundation was born from a simple but uncomfortable question:
              <em> why is it easier for one parent to raise five children, yet when those children are grown, they struggle to give back the same love to that one parent?</em>
            </p>
            <p>
              In Zimbabwe, and across Africa, aging is too often misunderstood. Harmful
              stereotypes paint the elderly as burdens, irrelevant, or even accused of
              things they are not. But aging is not a disease — it is a way of life. And
              a society that values youth while neglecting its elders builds a future
              with no roots.
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground pt-4">
              Yes, the future is young. But the future is empty without honouring those
              who birthed and shaped it.
            </p>
            <p>
              This is all engraved in our mantra — <strong>Young For The Elderly</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/40 border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow"><span className="rule-gold" />How We Answer</div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              Five doorways into one promise.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {pillars.map((p, i) => (
              <article key={p.tag} className="bg-background p-8 md:p-10">
                <div className="font-serif text-sm text-[color:var(--color-secondary)] tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-3 font-serif text-2xl">{p.tag}</h4>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-foreground/80">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery
        eyebrow="The Chairman in the field"
        title="Moments from visits, gatherings and quiet conversations."
        columns={3}
        items={[
          { caption: "Home visit — Domboshava" },
          { caption: "Ubumbano circle — Harare" },
          { caption: "PAOZ Africa Day event" },
          { caption: "Muzukuru Project mentorship" },
          { caption: "SilverCare medical outreach" },
          { caption: "Golden Grit skills exchange" },
        ]}
      />
    </SiteFrame>
  );
}
