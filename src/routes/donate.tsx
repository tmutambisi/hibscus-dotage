import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/lib/use-reveal";
import { Heart, Gift, Users, PackageCheck, Mail, CheckCircle2 } from "lucide-react";
import donateHeroImg from "@/assets/NewPictures/WhatsApp Image 2026-07-26 at 19.42.08.jpeg";
import donatePolaroidImg from "@/assets/NewPictures/WhatsApp Image 2026-07-26 at 19.42.10 (1).jpeg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Give a Gift. Stand With a Generation. Donate items, warm clothing, mobility aids, school supplies, or support for older persons and children under elderly care.",
      },
      { property: "og:title", content: "Donate — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "Give a Gift. Stand With a Generation. Every contribution strengthens our vision of an intergenerational society.",
      },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donationCategory, setDonationCategory] = useState("Older Persons");
  const [itemDescription, setItemDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const rManifesto = useReveal();
  const rCategories = useReveal();
  const rSteps = useReveal();
  const rImpact = useReveal();
  const rForm = useReveal();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donorName && donorEmail && itemDescription) {
      setSubmitted(true);
    }
  };

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Donation Programme · Hibiscus Dotage Foundation"
        title={
          <>
            Give a Gift.<br />
            Stand With a Generation.
          </>
        }
        lede="At Hibiscus Dotage Foundation, we believe every gift has value. No donation is too small, and no act of kindness is insignificant."
        primaryImage={donateHeroImg}
        secondaryImage={donatePolaroidImg}
        badge={{ value: "Every", label: "Gift Counts" }}
      />

      {/* Intro Manifesto */}
      <section ref={rManifesto} className="reveal py-20 md:py-28 bg-background border-b border-border">
        <div className="container-editorial max-w-4xl">
          <div className="eyebrow"><span className="rule-gold" />Support Is Deeply Personal</div>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-tight">
            Every contribution strengthens an intergenerational vision.
          </h2>
          <div className="mt-8 space-y-6 text-foreground/85 text-lg leading-relaxed">
            <p>
              At Hibiscus Dotage Foundation, we believe the elderly are the backbone of our work. Through walking alongside older persons, we have learned that support is deeply personal. Sometimes it is a meal. Sometimes it is a blanket, a walking stick, school shoes for a grandchild, or simply the right item at the right time.
            </p>
            <p>
              That is why we believe every gift has value. No donation is too small, and no act of kindness is insignificant. Help looks different for every family, and together we can ensure that what you have reaches someone who truly needs it.
            </p>

            <div className="p-8 bg-muted/50 border-l-4 border-[color:var(--color-primary)]">
              <p className="font-serif text-2xl text-[color:var(--color-primary)] italic">
                &ldquo;Your donation enables us to support older persons, empower young people to serve their communities, and care for children being raised by elderly guardians.&rdquo;
              </p>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed">
              Every contribution strengthens our vision of building an intergenerational society where dignity, compassion, and opportunity are shared across generations.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Donate Categories */}
      <section ref={rCategories} className="reveal py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="eyebrow"><span className="rule-gold" />Items We Welcome</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              What You Can Donate
            </h2>
            <p className="text-foreground/80 text-lg">
              We welcome new or gently used items that can improve the lives of our beneficiaries across our four core focus areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Category 1: For Older Persons */}
            <div className="p-8 md:p-10 bg-background border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 text-[color:var(--color-primary)] mb-4">
                  <Heart size={28} />
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                    Focus Area I
                  </span>
                </div>
                <h3 className="font-serif text-3xl">For Older Persons</h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Warm clothing and blankets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Walking sticks, wheelchairs, crutches, and other mobility aids</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Non-perishable food items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Personal care and hygiene products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Bedding, household essentials, and home comfort items</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category 2: For Children Under Elderly Care */}
            <div className="p-8 md:p-10 bg-background border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 text-[color:var(--color-primary)] mb-4">
                  <Gift size={28} />
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                    Focus Area II
                  </span>
                </div>
                <h3 className="font-serif text-3xl">For Children Under Elderly Care</h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>School uniforms and stationery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Books and educational materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>School bags and shoes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Clothing and daily essentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Toys and recreational items</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category 3: Youth Volunteers & Community Programmes */}
            <div className="p-8 md:p-10 bg-background border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 text-[color:var(--color-primary)] mb-4">
                  <Users size={28} />
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                    Focus Area III
                  </span>
                </div>
                <h3 className="font-serif text-3xl">Youth Volunteers &amp; Community</h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Training materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Laptops and digital equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Sports and recreational equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Project supplies and community engagement materials</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category 4: General Donations */}
            <div className="p-8 md:p-10 bg-background border border-border flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 text-[color:var(--color-primary)] mb-4">
                  <PackageCheck size={28} />
                  <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[color:var(--color-secondary)]">
                    Focus Area IV
                  </span>
                </div>
                <h3 className="font-serif text-3xl">General Donations</h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Household items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Care packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Furniture in good condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[color:var(--color-primary)] mt-1">•</span>
                    <span>Essential supplies that can improve the wellbeing of vulnerable families</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Donation Reaches Those Who Need It */}
      <section ref={rSteps} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="eyebrow"><span className="rule-gold" />The Journey of a Gift</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              How Your Donation Reaches Those Who Need It
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              {
                num: "01",
                title: "Contact Us",
                desc: "Reach out to our Donations Team and let us know what you would like to contribute.",
              },
              {
                num: "02",
                title: "We Identify the Need",
                desc: "Our team assesses current needs across our programmes and matches your donation to an older person, child, or family that will benefit most.",
              },
              {
                num: "03",
                title: "Collection or Drop-Off",
                desc: "You can deliver your donation to us or arrange collection where possible.",
              },
              {
                num: "04",
                title: "Creating Lasting Impact",
                desc: "Your gift becomes part of a wider journey of care, dignity, and community support. Where appropriate, we will share updates on your impact.",
              },
            ].map((step) => (
              <div key={step.num} className="p-8 bg-background flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl text-[color:var(--color-secondary)]">{step.num}</span>
                  <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Than a Donation */}
      <section ref={rImpact} className="reveal py-20 md:py-32 bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]">
        <div className="container-editorial max-w-4xl text-center space-y-6">
          <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)] font-semibold justify-center flex items-center">
            <span className="inline-block w-10 h-px bg-[color:var(--color-secondary)] align-middle mr-3" />
            More Than a Donation
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[color:var(--color-primary-foreground)]">
            Restoring dignity, strengthening families.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[color:var(--color-primary-foreground)]/90 max-w-3xl mx-auto">
            When you give to Hibiscus Dotage Foundation, you are doing more than donating an item. You are restoring dignity, strengthening families, supporting intergenerational care, and helping build communities where no older person is forgotten.
          </p>
          <p className="font-serif text-2xl italic text-[color:var(--color-secondary)] pt-4">
            &ldquo;Together, we are proving that meaningful change begins when people choose to stand with one another.&rdquo;
          </p>
        </div>
      </section>

      {/* Ready to Give? Contact / Pledge Form */}
      <section ref={rForm} className="reveal py-24 md:py-36 bg-background">
        <div className="container-editorial max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <div className="eyebrow justify-center"><span className="rule-gold" />Ready to Give?</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Get in Touch with Our Donations Team
            </h2>
            <p className="text-foreground/85 text-lg">
              If you have items you would like to donate or would like to learn more about our donation programme, we would love to hear from you.
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted border border-border mt-4">
              <Mail className="text-[color:var(--color-primary)]" size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Email: <a href="mailto:info@hibiscusdotagefoundation.org" className="text-[color:var(--color-primary)] hover:underline">info@hibiscusdotagefoundation.org</a>
              </span>
            </div>
          </div>

          <div className="p-8 md:p-12 border border-border bg-surface shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={48} className="mx-auto text-emerald-600 mb-4" />
                <h3 className="font-serif text-3xl">Thank you, {donorName}!</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Thank you for offering to donate for <strong>{donationCategory}</strong>. Our Donations Team will be in touch with you at <strong>{donorEmail}</strong> within 48 hours to coordinate collection or drop-off.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-primary"
                >
                  Submit another donation offer
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid gap-6">
                <div className="border-b border-border pb-4">
                  <h3 className="font-serif text-2xl">Donation Intent Form</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tell us what you would like to donate and how we can reach you.
                  </p>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Chipo Moyo"
                    className="form-input"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="chipo@example.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="+263 77 000 0000"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Donation Category</label>
                  <select
                    value={donationCategory}
                    onChange={(e) => setDonationCategory(e.target.value)}
                    className="form-input"
                  >
                    <option value="Older Persons">For Older Persons (Warm clothes, mobility aids, food, hygiene)</option>
                    <option value="Children Under Elderly Care">For Children Under Elderly Care (Uniforms, books, bags, shoes)</option>
                    <option value="Youth Volunteers">For Youth Volunteers &amp; Community (Laptops, sports, training supplies)</option>
                    <option value="General Donations">General Household &amp; Furniture Donations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">Item Details &amp; Location</label>
                  <textarea
                    required
                    rows={4}
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    placeholder="Please describe the items you wish to donate, condition, and your city/town..."
                    className="form-input resize-y"
                  />
                </div>

                <button type="submit" className="btn-primary w-full mt-2">
                  Send Donation Details
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
