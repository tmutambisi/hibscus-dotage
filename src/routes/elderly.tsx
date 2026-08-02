import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/lib/use-reveal";
import { Heart, Activity, TrendingUp, Handshake, Users, ShieldCheck, Mail } from "lucide-react";

import heroImg from "@/assets/hibscuss/hero.jpeg";
import portrait from "@/assets/potrait.jpeg";
import readingImg from "@/assets/hibscuss/reading.jpeg";
import vol3Img from "@/assets/hibscuss/vol3.jpeg";

export const Route = createFileRoute("/elderly")({
  head: () => ({
    meta: [
      { title: "Elderly Welfare — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Elderly Welfare Department: Dignity in Every Stage of Ageing. Discover Ubumbano Circles of Care, SilverCare medical adoption, and Golden Grit Longevity Economy.",
      },
      { property: "og:title", content: "Elderly Welfare — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "Dignity in Every Stage of Ageing. Standing with older persons through companionship, healthcare, and economic empowerment.",
      },
    ],
  }),
  component: ElderlyWelfarePage,
});

function ElderlyWelfarePage() {
  const rIntro = useReveal();
  const rProject1 = useReveal();
  const rProject2 = useReveal();
  const rProject3 = useReveal();
  const rPartnership = useReveal();
  const rClosing = useReveal();

  return (
    <SiteFrame>
      <PageHero
        eyebrow="The Elderly Welfare Department"
        title={
          <>
            Dignity in Every Stage<br />
            of Ageing.
          </>
        }
        lede="Older persons are not a problem to be solved. They are the architects of our communities, the keepers of our wisdom, and the foundation upon which stronger societies are built."
        primaryImage={heroImg}
        secondaryImage={readingImg}
        badge={{ value: "100+", label: "Households Served" }}
      />

      {/* Department Overview */}
      <section ref={rIntro} className="reveal py-20 md:py-28 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-sm border border-border shadow-xl">
                <img
                  src={heroImg}
                  alt="Revered elder in Zimbabwe"
                  className="w-full h-[450px] md:h-[580px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)]">
                    Elderly Welfare Department
                  </span>
                  <p className="mt-1 font-serif text-xl">
                    &ldquo;There is no one way to age with dignity.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />Our Philosophy</div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                Responding to different needs with dignity.
              </h2>
              <p className="text-foreground/85 text-lg leading-relaxed">
                Across Zimbabwe and the continent, aging remains misunderstood—reduced to a single challenge when, in truth, it encompasses many.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Some older persons are isolated, craving connection and belonging. Others face barriers accessing medicine or managing chronic illness. Many continue to work, to innovate, to lead—yet remain invisible in economic development.
              </p>
              <div className="p-6 bg-muted/60 border-l-2 border-[color:var(--color-secondary)]">
                <p className="font-serif text-lg italic text-[color:var(--color-primary)]">
                  &ldquo;Whether through companionship, healthcare access, or economic empowerment, each initiative serves a singular purpose: to stand with older persons.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 1: UBUMBANO: CIRCLES OF CARE */}
      <section ref={rProject1} className="reveal py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[color:var(--color-primary)]">
                <Heart size={28} />
                <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                  PROJECT 1
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Ubumbano: Circles of Care
              </h2>
              <p className="font-serif text-xl italic text-[color:var(--color-primary)]">
                &ldquo;Loneliness ends when youth and elders gather to listen.&rdquo;
              </p>
              <p className="text-foreground/85 leading-relaxed">
                Ubumbano brings youth and older persons together through intentional companionship, creating spaces where loneliness dissolves and wisdom is shared. Trained young volunteers conduct regular home visits, listen to life stories, and facilitate wellness checks.
              </p>
              <div className="p-6 bg-background border border-border">
                <h4 className="font-serif text-lg text-[color:var(--color-secondary)] font-semibold">How You Can Help</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  Become a companionship sponsor or volunteer. Support regular home visits through monthly donations ($30/month). Help us expand Ubumbano to underserved neighborhoods.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />At a Glance</div>
              <div className="grid gap-4">
                {[
                  "100+ households visited through home-based companionship",
                  "Volunteer-led conversations focused on wellness, storytelling, and emotional connection",
                  "Intergenerational impact: Youth volunteers trained in empathy, communication, and caregiving",
                  "Core activities: Home visits, wellness checks, group gatherings, skill and knowledge exchange",
                  "Hub-and-section model ensuring consistent engagement across neighborhoods",
                  "Community recognition: Monthly celebration of elders' stories and youth contributions",
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-background border border-border flex items-start gap-4">
                    <span className="font-serif text-xl text-[color:var(--color-secondary)] font-semibold">0{idx + 1}.</span>
                    <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2: SILVERCARE */}
      <section ref={rProject2} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[color:var(--color-primary)]">
                <Activity size={28} />
                <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                  PROJECT 2
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                SilverCare
              </h2>
              <p className="font-serif text-xl italic text-[color:var(--color-primary)]">
                &ldquo;Medicine reaches those who cannot reach it. Adoption sustains ongoing hope.&rdquo;
              </p>
              <p className="text-foreground/85 leading-relaxed">
                SilverCare bridges a critical gap: older persons living with chronic illness, disability, or poverty often cannot access even basic prescribed medication. Through partnerships with hospitals and pharmacies, SilverCare sources and distributes medicine while conducting wellness checks.
              </p>
              <div className="p-6 bg-muted/60 border border-border">
                <h4 className="font-serif text-lg text-[color:var(--color-secondary)] font-semibold">Adopt-an-Elder Model</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  Connecting sponsors directly to specific beneficiaries for $15/month, building sustainable support systems rather than one-time aid.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />At a Glance</div>
              <div className="grid gap-4">
                {[
                  "5 elderly beneficiaries currently receiving prescribed medication through partnerships",
                  "500+ community members reached through medical outreach program in Dema",
                  "Adopt-an-Elder model connecting sponsors to specific beneficiaries for ongoing support",
                  "Medical partnerships: Collaboration with hospitals, pharmacies, and health professionals",
                  "Health awareness campaigns during key observances (World Health Day, International Day of Older Persons)",
                  "Research partnerships with universities on common elderly illnesses (hypertension, diabetes, arthritis, dementia, heart disease)",
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-muted/40 border border-border flex items-start gap-4">
                    <span className="font-serif text-xl text-[color:var(--color-secondary)] font-semibold">0{idx + 1}.</span>
                    <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 3: GOLDEN GRIT */}
      <section ref={rProject3} className="reveal py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[color:var(--color-primary)]">
                <TrendingUp size={28} />
                <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                  PROJECT 3
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Golden Grit: Building the Longevity Economy
              </h2>
              <p className="font-serif text-xl italic text-[color:var(--color-primary)]">
                &ldquo;Experience is capital. Elderly entrepreneurs are the economy&apos;s strongest foundation.&rdquo;
              </p>
              <p className="text-foreground/85 leading-relaxed">
                Golden Grit challenges the myth that older age means economic invisibility. Across communities like Mufakose, elderly women run vegetable stalls, poultry projects, tailoring, and food enterprises—Golden Grit strengthens these businesses through intergenerational collaboration.
              </p>
              <div className="p-6 bg-background border border-border">
                <h4 className="font-serif text-lg text-[color:var(--color-secondary)] font-semibold">How You Can Help</h4>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  Sponsor an elderly entrepreneur&apos;s business toolkit ($50–$100 for digital training, bookkeeping supplies, branding). Invest in the longevity economy.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />At a Glance</div>
              <div className="grid gap-4">
                {[
                  "Mufakose pilot launch in one of Harare's oldest, most resilient high-density communities",
                  "Multiple enterprise types supported: Vegetable production, poultry, tailoring, grocery retail, craft, food processing",
                  "Intergenerational knowledge exchange: Digital skills, mobile money, bookkeeping, marketing meet decades of business wisdom",
                  "Household multiplier effect: Strengthened elderly businesses directly improve food security for families and dependants",
                  "Sub-Saharan context: Only 17% of older persons receive formal pensions; informal enterprise is survival",
                  "Longevity economy focus: Recognizing 1.5 billion older persons globally by 2050 as active contributors, not dependents",
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-background border border-border flex items-start gap-4">
                    <span className="font-serif text-xl text-[color:var(--color-secondary)] font-semibold">0{idx + 1}.</span>
                    <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP & CONTRIBUTION PATHWAYS */}
      <section ref={rPartnership} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="eyebrow"><span className="rule-gold" />Partnership Pathways</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Why Partner With Us
            </h2>
            <p className="text-foreground/85 text-lg leading-relaxed">
              The Elderly Welfare Department operates at the intersection of care, economics, and social transformation. We are not building dependency—we are building resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* As a Sponsor */}
            <div className="p-8 bg-muted/40 border border-border">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold mb-3">
                Path 01 · Sponsorship
              </div>
              <h3 className="font-serif text-2xl">As a Sponsor</h3>
              <ul className="mt-4 space-y-3 text-xs text-foreground/80 leading-relaxed">
                <li>• <strong>Adopt an Elder (SilverCare):</strong> $15/month ensures monthly prescribed medicine for one older person.</li>
                <li>• <strong>Support Ubumbano:</strong> $30/month funds home visits, wellness checks, and activities for one elder.</li>
                <li>• <strong>Empower an Entrepreneur (Golden Grit):</strong> $50–$100 provides business toolkits (bookkeeping, digital training, branding).</li>
              </ul>
            </div>

            {/* As a Volunteer */}
            <div className="p-8 bg-muted/40 border border-border">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold mb-3">
                Path 02 · Volunteering
              </div>
              <h3 className="font-serif text-2xl">As a Volunteer</h3>
              <ul className="mt-4 space-y-3 text-xs text-foreground/80 leading-relaxed">
                <li>• Conduct home visits and wellness checks with Ubumbano</li>
                <li>• Facilitate health awareness campaigns with SilverCare</li>
                <li>• Provide digital literacy, bookkeeping, or marketing mentorship through Golden Grit</li>
                <li>• Help organize community gatherings and intergenerational events</li>
              </ul>
            </div>

            {/* As a Professional Partner */}
            <div className="p-8 bg-muted/40 border border-border">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold mb-3">
                Path 03 · Professional
              </div>
              <h3 className="font-serif text-2xl">As a Professional Partner</h3>
              <ul className="mt-4 space-y-3 text-xs text-foreground/80 leading-relaxed">
                <li>• <strong>Healthcare &amp; Pharmacy:</strong> Supply medicine, conduct outreach clinics, partner on affordable medicine.</li>
                <li>• <strong>Academia:</strong> Research elderly health, co-author policy papers, train medical students.</li>
                <li>• <strong>Tech &amp; Marketing:</strong> Offer pro bono digital training, app development, or branding for elderly enterprises.</li>
              </ul>
            </div>

            {/* As a Corporate Partner */}
            <div className="p-8 bg-muted/40 border border-border">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold mb-3">
                Path 04 · Corporate CSR
              </div>
              <h3 className="font-serif text-2xl">As a Corporate Partner</h3>
              <ul className="mt-4 space-y-3 text-xs text-foreground/80 leading-relaxed">
                <li>• Sponsor medicine procurement through SilverCare</li>
                <li>• Fund elderly entrepreneurship toolkits through Golden Grit</li>
                <li>• Release employees for volunteer companionship with Ubumbano</li>
                <li>• Support research initiatives and health awareness campaigns</li>
              </ul>
            </div>

            {/* As an Advocate */}
            <div className="p-8 bg-muted/40 border border-border">
              <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold mb-3">
                Path 05 · Advocacy
              </div>
              <h3 className="font-serif text-2xl">As an Advocate</h3>
              <ul className="mt-4 space-y-3 text-xs text-foreground/80 leading-relaxed">
                <li>• Share our stories across your personal and professional networks</li>
                <li>• Support policy dialogue on elderly healthcare access and economic inclusion</li>
                <li>• Champion intergenerational solidarity in your community</li>
              </ul>
            </div>

            {/* Contact & Next Steps */}
            <div className="p-8 bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)] border border-border flex flex-col justify-between">
              <div>
                <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)] font-semibold">
                  Get In Touch
                </span>
                <h3 className="mt-2 font-serif text-2xl text-white">Contact &amp; Next Steps</h3>
                <p className="mt-3 text-xs text-white/80 leading-relaxed">
                  Reach out to the Elderly Welfare Department to explore partnerships, volunteering, or sponsorships.
                </p>
              </div>
              <a
                href="mailto:info@hibiscusdotagefoundation.org"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--color-secondary)] hover:underline"
              >
                <Mail size={16} /> info@hibiscusdotagefoundation.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement for Website */}
      <section ref={rClosing} className="reveal py-24 md:py-36 bg-background">
        <div className="container-editorial max-w-4xl text-center space-y-6">
          <div className="eyebrow justify-center"><span className="rule-gold" />Our Core Truth</div>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            A society is measured by how it honors its oldest.
          </h2>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-3xl mx-auto">
            Through Ubumbano, SilverCare, and Golden Grit, Hibiscus Dotage Foundation stands with older persons—not to replace their strength, but to amplify it.
          </p>
          <p className="font-serif text-2xl md:text-3xl italic text-[color:var(--color-primary)] pt-4">
            &ldquo;Because every year deserves care. Every story deserves to be heard. Every older person deserves dignity.&rdquo;
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
