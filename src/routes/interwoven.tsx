import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/lib/use-reveal";

import c1 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.12.jpeg";
import c2 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.20 (1).jpeg";
import c3 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.20.jpeg";
import c4 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.21 (1).jpeg";
import c5 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.21.jpeg";
import c6 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.22 (1).jpeg";
import c7 from "@/assets/children/WhatsApp Image 2026-07-26 at 19.47.22.jpeg";

export const Route = createFileRoute("/interwoven")({
  head: () => ({
    meta: [
      { title: "Interwoven Lives — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Interwoven Lives: Where children (Muzukuru) and elderly caregivers thrive together through the Dotage Dream Fund and Muzukuru Project.",
      },
      { property: "og:title", content: "Interwoven Lives — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "When we strengthen an older caregiver, we strengthen a child. It's not charity. It's community.",
      },
    ],
  }),
  component: InterwovenPage,
});

function InterwovenPage() {
  const [selectedTier, setSelectedTier] = useState<string>("BRONZE");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [guardianName, setGuardianName] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");

  const rBackground = useReveal();
  const rDream = useReveal();
  const rStory = useReveal();
  const rTiers = useReveal();
  const rProject = useReveal();
  const rGallery = useReveal();
  const rCta = useReveal();

  const handleGuardianSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guardianName && guardianEmail) {
      setSubmitted(true);
    }
  };

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Programme I · Interwoven Lives"
        title={
          <>
            Where Children &amp;<br />
            Elderly Thrive Together.
          </>
        }
        lede="Dedicated to children under the care of elderly guardians—children we call Muzukuru. Raised, protected, loved, and guided by grandparents whose lives are woven with theirs."
        primaryImage={c3}
        secondaryImage={c7}
        badge={{ value: "$30", label: "Per term · Muzukuru" }}
      />

      {/* Intro Manifesto */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-sm border border-border shadow-xl">
                <img
                  src={c3}
                  alt="Elderly grandmother with her grandchild"
                  className="w-full h-[450px] md:h-[580px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)]">
                    Interwoven Lives
                  </span>
                  <p className="mt-1 font-serif text-xl">
                    &ldquo;One fabric. One heartbeat. One hope.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />What Is Interwoven Lives?</div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                Refusing to separate the child from the elder.
              </h2>
              <p className="text-foreground/85 text-lg leading-relaxed">
                When we strengthen an older caregiver, we strengthen a child. When we invest in a child, we honour the sacrifice of the older person raising them. That is why we refuse to separate them.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As we stepped into the homes of elderly Zimbabweans, a deeper truth emerged: many were not alone. They were raising children… again.
              </p>
              <div className="p-6 bg-muted/60 border-l-2 border-[color:var(--color-primary)]">
                <p className="font-serif text-xl italic text-[color:var(--color-primary)]">
                  &ldquo;You cannot support the elderly without seeing the children they are fighting to raise.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stark Statistics & Background */}
      <section ref={rBackground} className="reveal py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow"><span className="rule-gold" />The Reality We Observed</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
              The stark numbers in Zimbabwe.
            </h2>
            <p className="mt-4 text-foreground/80 text-lg">
              Children under elderly care face concentrated vulnerabilities. School fees are impossible, basics are lacking, and the pain of this gap is written on every face.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border">
              <div className="font-serif text-5xl text-[color:var(--color-primary)]">60%</div>
              <div className="mt-4 font-serif text-2xl">Grandparent Households</div>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Approximately 60% of orphaned and vulnerable children in Zimbabwe are in grandparent-headed households, mostly looked after by elderly women.
              </p>
            </div>

            <div className="p-8 bg-background border border-border">
              <div className="font-serif text-5xl text-[color:var(--color-primary)]">26.6%</div>
              <div className="mt-4 font-serif text-2xl">Separated from Parents</div>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                More than 26.6% of children under 18 in Zimbabwe do not live with either parent, relying entirely on elderly guardians.
              </p>
            </div>

            <div className="p-8 bg-background border border-border">
              <div className="font-serif text-5xl text-[color:var(--color-primary)]">82%</div>
              <div className="mt-4 font-serif text-2xl">Elderly Vulnerability</div>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                82% of older people in rural areas face disability, non-communicable diseases, limited healthcare access, and zero or inadequate pensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dotage Dream Fund */}
      <section ref={rDream} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />Education Initiative</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                The Dotage Dream Fund
              </h2>
              <p className="font-serif text-2xl text-[color:var(--color-primary)] italic">
                &ldquo;Where yesterday&apos;s love meets tomorrow&apos;s opportunity.&rdquo;
              </p>
              <p className="text-foreground/85 leading-relaxed">
                Education should not be a luxury. Just <strong>$30 covers one child&apos;s school term</strong>. In communities where elderly guardians earn nothing or live on inadequate pensions, $30 is the difference between a child in school and a child at home.
              </p>
              <div className="p-6 bg-muted/50 border border-border">
                <h4 className="font-serif text-xl text-[color:var(--color-secondary)]">Why the Number Six?</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  In numerology, the number 6 stands for love, care, responsibility, and harmony. <strong>Six young people, giving just $5 every 3 months, can carry one future together.</strong> No one walks alone—and love is always strongest in numbers.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <img src={c1} alt="Child in school uniform supported by Dotage Dream Fund" className="w-full h-72 object-cover border border-border" />
                <img src={c2} alt="Young student smiling with books" className="w-full h-72 object-cover border border-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Story: Gogo Silenge */}
      <section ref={rStory} className="reveal py-20 md:py-32 bg-muted/40 border-b border-border">
        <div className="container-editorial max-w-4xl">
          <div className="eyebrow"><span className="rule-gold" />A Real Story</div>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-tight">
            Gogo Silenge &amp; Her Grandchild
          </h2>
          <div className="mt-8 p-8 md:p-12 bg-background border border-border space-y-6">
            <p className="text-foreground/85 text-lg leading-relaxed">
              Gogo Silenge, from Chizhanje village, was struggling to send her grandchild to school. The fees were impossible. The uniform was a dream. Every term, the child would miss weeks, or the whole term, while Gogo worked odd jobs trying to find money.
            </p>
            <p className="text-foreground/85 text-lg leading-relaxed font-serif italic border-l-2 border-[color:var(--color-secondary)] pl-6 text-[color:var(--color-primary)]">
              When the Dotage Dream Fund came, everything changed. The fees were paid. The uniform came. The child went to school.
            </p>
            <blockquote className="p-6 bg-muted/60 text-foreground/90 font-serif text-xl italic">
              &ldquo;Thank you very much for the school fees. Since you started talking with him, his misbehaviour has reduced. And he has even improved academically.&rdquo;
              <footer className="mt-3 text-xs uppercase tracking-widest text-muted-foreground font-sans not-italic">
                — Gogo Silenge, Chizhanje Village
              </footer>
            </blockquote>
            <p className="text-foreground/80 leading-relaxed text-sm">
              Knowing her child&apos;s fees were paid and uniforms were coming was not just about education. It was about relief and dignity restored—easing an elderly woman&apos;s burden so she could focus on loving her grandchild rather than only surviving.
            </p>
          </div>
        </div>
      </section>

      {/* Be a Guardian: Choose Your Level */}
      <section ref={rTiers} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="eyebrow justify-center"><span className="rule-gold" />Guardian Sponsorship</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Be a Guardian: Choose Your Level
            </h2>
            <p className="text-foreground/80 text-lg">
              Every tier ensures a child stays in school and an elderly guardian receives dignity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "BRONZE",
                name: "BRONZE GUARDIAN",
                term: "$5 / term",
                year: "$15 / year",
                people: "6 people per child",
                tagline: "Collective effort, shared hope.",
              },
              {
                id: "SILVER",
                name: "SILVER GUARDIAN",
                term: "$10 / term",
                year: "$30 / year",
                people: "3 people per child",
                tagline: "Steady hands, brighter futures.",
              },
              {
                id: "GOLD",
                name: "GOLD GUARDIAN",
                term: "$15 / term",
                year: "$45 / year",
                people: "2 people per child",
                tagline: "Stronger support, deeper impact.",
              },
              {
                id: "DIAMOND",
                name: "DIAMOND GUARDIAN",
                term: "$30 / term",
                year: "$90 / year",
                people: "1 person per child",
                tagline: "One heart, one future transformed.",
              },
            ].map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`text-left p-8 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "border-2 border-[color:var(--color-primary)] bg-muted/60 shadow-xl"
                      : "border-border bg-background hover:border-foreground/40"
                  }`}
                >
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)] font-semibold">
                      {tier.people}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl">{tier.name}</h3>
                    <div className="mt-4 font-serif text-3xl text-[color:var(--color-primary)]">
                      {tier.term}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{tier.year}</div>
                    <p className="mt-4 text-xs text-foreground/80 leading-relaxed italic">
                      &ldquo;{tier.tagline}&rdquo;
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                    <span>{isSelected ? "Selected" : "Select Tier"}</span>
                    <span className="h-2 w-2 rounded-full bg-[color:var(--color-secondary)]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Muzukuru Project & 3 Pillars */}
      <section ref={rProject} className="reveal py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />The Sacred Relationship</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                The Muzukuru Project
              </h2>
              <p className="text-foreground/85 leading-relaxed">
                <em>Muzukuru</em> means a child under the care of elderly relatives. In Zimbabwean families, this is a sacred relationship—but one under heavy strain.
              </p>
              <div className="p-6 bg-background border border-border">
                <h4 className="font-serif text-lg text-[color:var(--color-primary)]">A Day in the Life of a Young Custodian</h4>
                <p className="mt-2 text-xs text-foreground/80 leading-relaxed">
                  Typical days begin early with water collection and meal prep, followed by school, clinic visits with their elderly guardian, and piecework or selling vegetables to supplement household income. They need childhood, learning time, and support to thrive.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />3 Integrated Pillars</div>
              <div className="grid gap-6">
                <div className="p-6 md:p-8 bg-background border border-border">
                  <span className="font-serif text-xl text-[color:var(--color-secondary)]">Pillar 01</span>
                  <h3 className="mt-2 font-serif text-2xl">Immediate Household Relief</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    Monthly food packs, hygiene items, and small transport stipends for clinic visits. Countering meal-skipping and blanket-sharing so families can focus on health and education.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-background border border-border">
                  <span className="font-serif text-xl text-[color:var(--color-secondary)]">Pillar 02</span>
                  <h3 className="mt-2 font-serif text-2xl">Education Continuity</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    Term-aligned payments for school fees, uniforms, stationery, and examination fees to prevent dropouts during critical transitions.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-background border border-border">
                  <span className="font-serif text-xl text-[color:var(--color-secondary)]">Pillar 03</span>
                  <h3 className="mt-2 font-serif text-2xl">Psychosocial Support &amp; Volunteer Training</h3>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    Mentorship preserving childhood and hope. Training caregivers and volunteers on safe caregiving, medication scheduling, and psychosocial first aid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children Photo Gallery */}
      <section ref={rGallery} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow"><span className="rule-gold" />Interwoven Lives Photo Gallery</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
                Moments of hope &amp; dignity.
              </h2>
            </div>
            <p className="max-w-md text-foreground/80 text-sm">
              Muzukuru children and elderly caregivers walking together in community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[c4, c5, c6, c7].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm border border-border h-64 md:h-80">
                <img
                  src={img}
                  alt={`Muzukuru child support moment ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guardian Signup Call to Action */}
      <section ref={rCta} className="reveal py-24 md:py-36 bg-muted/40">
        <div className="container-editorial max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <div className="eyebrow justify-center"><span className="rule-gold" />Become a Guardian</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Support a Muzukuru. Honour an Elder.
            </h2>
            <p className="text-foreground/85 text-lg leading-relaxed">
              When you support a child under elderly care, you are not simply paying school fees. You are supporting the grandmother who wakes at dawn to prepare porridge.
            </p>
            <p className="text-sm text-muted-foreground italic">
              It&apos;s not charity. It&apos;s community. It&apos;s connection. It&apos;s continuity.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-background border border-border shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="eyebrow justify-center"><span className="rule-gold" />Pledge Received</div>
                <h3 className="mt-4 font-serif text-3xl">Thank you, {guardianName}!</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Thank you for standing as a <strong className="text-[color:var(--color-primary)]">{selectedTier} GUARDIAN</strong>. A coordinator will email you at <strong>{guardianEmail}</strong> with contribution details.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-primary"
                >
                  Make another pledge
                </button>
              </div>
            ) : (
              <form onSubmit={handleGuardianSubmit} className="grid gap-6">
                <div className="p-4 bg-muted/50 border border-border flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold">Selected Level:</span>
                  <span className="font-serif text-xl text-[color:var(--color-primary)]">{selectedTier} GUARDIAN</span>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    placeholder="e.g. Tendai Moyo"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={guardianEmail}
                    onChange={(e) => setGuardianEmail(e.target.value)}
                    placeholder="tendai@example.com"
                    className="form-input"
                  />
                </div>

                <button type="submit" className="btn-primary w-full mt-4">
                  Pledge as a {selectedTier} Guardian
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
