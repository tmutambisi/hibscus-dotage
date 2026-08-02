import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/lib/use-reveal";

import mainImg from "@/assets/volunteers/main.jpeg";
import v1 from "@/assets/volunteers/WhatsApp Image 2026-07-26 at 19.41.55.jpeg";
import v2 from "@/assets/volunteers/WhatsApp Image 2026-07-26 at 19.42.03.jpeg";
import v3 from "@/assets/volunteers/WhatsApp Image 2026-07-26 at 19.42.04 (1).jpeg";
import v4 from "@/assets/volunteers/WhatsApp Image 2026-07-26 at 19.42.04.jpeg";
import v5 from "@/assets/volunteers/WhatsApp Image 2026-07-26 at 19.42.05.jpeg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Why Volunteer — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Volunteering at Hibiscus Dotage Foundation is a deliberate journey of self-discovery through service to others. Join our youth movement.",
      },
      { property: "og:title", content: "Why Volunteer — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content: "At Hibiscus, volunteering is not what you do. It is who you become.",
      },
    ],
  }),
  component: VolunteerPage,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  city: z.string().trim().min(2, "Where are you based?").max(100),
  age: z.string().trim().min(1, "Required").max(3),
  availability: z.string().min(1, "Select an option"),
  motivation: z.string().trim().min(10, "Tell us a little more").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  age: "",
  availability: "",
  motivation: "",
};

function VolunteerPage() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const rDiff = useReveal();
  const rTraits = useReveal();
  const rDna = useReveal();
  const rValues = useReveal();
  const rLeader = useReveal();
  const rJourney = useReveal();
  const rGallery = useReveal();
  const rForm = useReveal();

  const update = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <SiteFrame>
      <PageHero
        eyebrow="The Youth Aspect · Volunteering at Hibiscus"
        title={
          <>
            Why Volunteer<br /> with Hibiscus.
          </>
        }
        lede="You are not here to fill our need. You are here because you need purpose. And we have created space for you to find it."
        primaryImage={v2}
        secondaryImage={v5}
        badge={{ value: "600+", label: "Volunteers" }}
      />

      {/* Main Picture & Lead Manifesto Section */}
      <section className="py-16 md:py-24 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-sm border border-border shadow-xl">
                <img
                  src={mainImg}
                  alt="Hibiscus Youth Volunteers gathering with community elders"
                  loading="eager"
                  className="w-full h-[450px] md:h-[600px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)]">
                    Main Feature
                  </span>
                  <p className="mt-1 font-serif text-lg md:text-xl">
                    Youth volunteers engaging in community service and intergenerational mentorship.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />The Core Philosophy</div>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                At Hibiscus, volunteering is not what you do. It is who you become.
              </h2>
              <p className="text-foreground/85 text-lg leading-relaxed">
                Volunteering at Hibiscus Dotage Foundation is not a transaction. It is not about giving your spare time to help us complete tasks. It is a deliberate journey of self-discovery through service to others.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                You bring your whole self—your skills, your questions, your ambitions, your uncertainties—and you commit to growing them within community. You do not volunteer to help; you volunteer because helping is how you become.
              </p>
              <p className="text-foreground/80 leading-relaxed font-serif italic text-xl border-l-2 border-[color:var(--color-secondary)] pl-4">
                &ldquo;You see intergenerational connection not as charity, but as inheritance—receiving knowledge while leaving legacy.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hibiscus Difference */}
      <section ref={rDiff} className="reveal py-20 md:py-32 bg-muted/40 border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow"><span className="rule-gold" />The Hibiscus Difference</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
              A paradigm shift in youth volunteering.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 bg-background border border-border flex flex-col justify-between">
              <div>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Traditional Volunteering
                </span>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">&ldquo;Can you help?&rdquo;</h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Traditional organizations recruit volunteers because they need help. They view young people as free labor to complete tasks and fill organizational gaps.
                </p>
              </div>
              <div className="mt-8 text-xs uppercase tracking-widest text-muted-foreground border-t border-border pt-4">
                Transactional Model
              </div>
            </div>

            <div className="p-8 md:p-12 bg-background border-2 border-[color:var(--color-secondary)] flex flex-col justify-between relative shadow-lg">
              <span className="absolute top-4 right-4 text-[0.65rem] uppercase tracking-widest px-3 py-1 bg-[color:var(--color-secondary)] text-[color:var(--secondary-foreground)] font-semibold">
                The Hibiscus Way
              </span>
              <div>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                  Hibiscus Volunteering
                </span>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">&ldquo;Who will you become through helping?&rdquo;</h3>
                <p className="mt-4 text-foreground/90 leading-relaxed">
                  Hibiscus creates opportunities because young people need purpose. We see elders not as problems to solve, but as teachers, storytellers, wisdom-keepers, and co-creators of your leadership.
                </p>
              </div>
              <div className="mt-8 text-xs uppercase tracking-widest text-[color:var(--color-primary)] border-t border-border pt-4 font-semibold">
                Transformational Model
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is a Hibiscus Volunteer & The Character */}
      <section ref={rTraits} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="eyebrow"><span className="rule-gold" />Who is a Hibiscus Volunteer?</div>
              <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-tight">
                A young person who gives themselves—not just their time.
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed">
                You recognize that change does not happen through individual heroism. It happens through distributed care—where every person in the ecosystem has the agency to lead, the responsibility to contribute, and the dignity to be seen.
              </p>
              <p className="mt-4 font-serif text-xl text-[color:var(--color-primary)] italic">
                You are not temporarily helping. You are permanently becoming a community builder.
              </p>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="eyebrow"><span className="rule-gold" />The 3 Foundational Traits</div>
              <p className="text-muted-foreground text-sm">
                Every Hibiscus volunteer embodies three foundational traits that define your presence:
              </p>

              <div className="grid gap-6">
                <div className="p-6 md:p-8 bg-muted/60 border border-border">
                  <span className="font-serif text-2xl text-[color:var(--color-secondary)]">01. Passion</span>
                  <h3 className="mt-2 font-serif text-2xl">Sincere Love for Humanity</h3>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    Sincere love for humanity drives you to show up every day with commitment to creating better community. Your passion is contagious—it inspires those around you.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-muted/60 border border-border">
                  <span className="font-serif text-2xl text-[color:var(--color-secondary)]">02. Reliability</span>
                  <h3 className="mt-2 font-serif text-2xl">You Do What You Say You Will Do</h3>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    Your ability to fulfill commitments reflects on you and the organization. People know they can count on you.
                  </p>
                </div>

                <div className="p-6 md:p-8 bg-muted/60 border border-border">
                  <span className="font-serif text-2xl text-[color:var(--color-secondary)]">03. Energy</span>
                  <h3 className="mt-2 font-serif text-2xl">Enthusiasm and Positive Presence</h3>
                  <p className="mt-2 text-foreground/80 text-sm leading-relaxed">
                    Volunteering requires enthusiasm and positive presence, not just showing up. You bring excitement to the work you do and inspire others to believe in what&apos;s possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Volunteer DNA (Character, Mindset, Behaviours) */}
      <section ref={rDna} className="reveal py-20 md:py-32 bg-muted/30 border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow"><span className="rule-gold" />The Volunteer DNA</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
              What makes a Hibiscus volunteer distinctive.
            </h2>
            <p className="mt-4 text-foreground/80 text-lg">
              Beyond the three foundational traits, every Hibiscus volunteer embodies a distinctive DNA—character, mindset, and behaviours that define who you are in this ecosystem.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Character */}
            <div className="p-8 bg-background border border-border flex flex-col justify-between">
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold border-b border-border pb-3">
                  Character: Your Foundation
                </div>
                <ul className="mt-6 space-y-6 text-sm">
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Genuinely Others-Centred</strong>
                    <span className="text-foreground/75">Your primary motivation is not personal gain. You believe the lives of others matter deeply, and you want to be part of making them better.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Humble About Development</strong>
                    <span className="text-foreground/75">You know you have something to offer. You also know there is infinitely more to learn. You enter as a learner, not an expert.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Brave Enough to Be Uncomfortable</strong>
                    <span className="text-foreground/75">Meaningful work lives in discomfort. You lean into difficult conversations, broken stories, and your own biases. You let it change you.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Committed to Integrity</strong>
                    <span className="text-foreground/75">You do what you say. You tell the truth, even when inconvenient. You acknowledge mistakes quickly and do not pretend.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mindset */}
            <div className="p-8 bg-background border border-border flex flex-col justify-between">
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold border-b border-border pb-3">
                  Mindset: How You Think
                </div>
                <ul className="mt-6 space-y-6 text-sm">
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Systems Over Symptoms</strong>
                    <span className="text-foreground/75">You do not volunteer just to feel good. You think about root causes, interconnected problems, and long-term solutions.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">We Over Me</strong>
                    <span className="text-foreground/75">Your success is collective impact. You celebrate wins that benefit the community. You ask: &ldquo;How does this serve the mission?&rdquo;</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Ubuntu: I Am Because We Are</strong>
                    <span className="text-foreground/75">You understand your humanity is inseparable from others&apos;. You see elders not as beneficiaries but as wisdom-keepers who make you whole.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Possibility Over Constraint</strong>
                    <span className="text-foreground/75">When a problem seems impossible, you ask: &ldquo;What resources do we have? Who can we partner with? What haven&apos;t we imagined yet?&rdquo;</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Behaviours */}
            <div className="p-8 bg-background border border-border flex flex-col justify-between">
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold border-b border-border pb-3">
                  Behaviours: How You Show Up
                </div>
                <ul className="mt-6 space-y-5 text-sm">
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Presence</strong>
                    <span className="text-foreground/75">Fully present—mentally, emotionally, physically. You listen to understand. You remember. You follow up.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Initiative</strong>
                    <span className="text-foreground/75">You do not wait to be told. You observe, think, and act. Ownership of small things compounds into transformation.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Reflection</strong>
                    <span className="text-foreground/75">Regularly pause to ask: &ldquo;What did I learn? How did I grow? What will I do differently?&rdquo; Document your journey.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Reciprocity</strong>
                    <span className="text-foreground/75">Recognize you receive as much as you give. Make gratitude visible and acknowledge interdependence.</span>
                  </li>
                  <li>
                    <strong className="block font-serif text-lg text-foreground">Courage</strong>
                    <span className="text-foreground/75">Speak up when something is wrong. Ask questions when you do not understand. Admit when you have caused harm.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Volunteer Values */}
      <section ref={rValues} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow"><span className="rule-gold" />The Volunteer Values</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
              How we operate.
            </h2>
            <p className="mt-4 text-foreground/80 text-lg">
              Every Hibiscus volunteer lives out these six core values, regardless of stage or role:
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                title: "Ubuntu: I am because we are",
                body: "We operate from radical interdependence. We know that our humanity is incomplete without others. We serve with dignity, recognizing the full personhood of every human we encounter.",
              },
              {
                title: "Purpose",
                body: "We do not volunteer because we have spare time. We volunteer because we believe our lives matter and we want that mattering to extend to others. We align our individual actions with collective vision.",
              },
              {
                title: "Reciprocity",
                body: "We give and receive. We teach and learn. We lead and follow. We recognize that elders are not beneficiaries of our service—they are wisdom-keepers and co-creators. We make gratitude visible.",
              },
              {
                title: "Integrity",
                body: "We do what we say we will do. We tell the truth, even when it is difficult. We acknowledge mistakes quickly and learn from them. Our word is our foundation. People can trust us.",
              },
              {
                title: "Courage",
                body: "We show up for difficult conversations. We advocate for what we believe in. We admit when we do not know something. We do uncomfortable things because they matter. We are brave enough to be changed.",
              },
              {
                title: "Collective Care",
                body: "We hold each other accountable with love. We celebrate each other's growth. We create space for people to be whole—their struggling, learning, grieving, joyful selves. Care is political resistance.",
              },
            ].map((val, i) => (
              <div key={val.title} className="p-8 md:p-10 bg-background flex flex-col justify-between">
                <div>
                  <span className="font-serif text-lg text-[color:var(--color-secondary)]">0{i + 1}.</span>
                  <h3 className="mt-3 font-serif text-2xl">{val.title}</h3>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{val.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relational Leadership Philosophy */}
      <section ref={rLeader} className="reveal py-20 md:py-32 bg-[color:var(--color-primary)] text-[color:var(--color-primary-foreground)]">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-secondary)] font-semibold">
              <span className="inline-block w-10 h-px bg-[color:var(--color-secondary)] align-middle mr-3" />
              Leadership Philosophy
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight text-[color:var(--color-primary-foreground)]">
              Relational Leadership
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-primary-foreground)]/90">
              At Hibiscus, we operate from Relational Leadership—a philosophy that emerges from Ubuntu and is grounded in our specific context of intergenerational service.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-primary-foreground)]/80">
              Relational Leadership means power is not concentrated at the top. Your ability to lead is not determined by your position—it is determined by the quality of your relationships and your commitment to collective wellbeing.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Power Flows Through Care",
                desc: "Leadership happens at the edges, not just at the centre. Sometimes the most powerful leadership is a one-on-one conversation with an elder, or the quiet decision to show up reliably. Your presence matters.",
              },
              {
                title: "Relationships Are Infrastructure",
                desc: "We build networks of mutual accountability and care, not hierarchies. The strength of Hibiscus is not our systems—it is the quality of our relationships. Systems can break. Relationships sustain us.",
              },
              {
                title: "Vulnerability Is Leadership",
                desc: "Real leadership means showing up as a whole person. You lead by admitting what you don't know, asking for help, and being willing to change your mind.",
              },
              {
                title: "Everyone Holds Others Accountable",
                desc: "You are accountable to community, to your cohort, to the elders whose trust you've earned. Accountability is love—it says 'you matter. Your work matters. I care enough to tell you the truth.'",
              },
              {
                title: "Legacy Is Collective",
                desc: "You are not building a personal brand. You are building community memory, relationships that outlast your formal volunteering, systems that other volunteers will inherit and improve.",
              },
            ].map((p, idx) => (
              <div
                key={p.title}
                className="p-8 border border-white/15 bg-white/5 backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-xl text-[color:var(--color-secondary)]">Pillar {idx + 1}</span>
                  <h3 className="mt-2 font-serif text-2xl text-white">{p.title}</h3>
                  <p className="mt-4 text-xs md:text-sm text-white/80 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Volunteer Journey: 6 Stages */}
      <section ref={rJourney} className="reveal py-20 md:py-32 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow"><span className="rule-gold" />The Volunteer Journey</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
              A progression of becoming.
            </h2>
            <p className="mt-4 text-foreground/80 text-lg">
              Volunteering at Hibiscus is not a one-time event. It is a journey of deepening purpose, expanding capacity, and growing responsibility.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "The Seeker", subtitle: "Exploring your purpose", desc: "You enter as a learner, asking deep questions and understanding the intergenerational framework." },
              { num: "02", title: "The Igniter", subtitle: "Activating within mission", desc: "You begin consistent elder visits, discovering the rhythm of presence and active care." },
              { num: "03", title: "The Activator", subtitle: "Creating real change", desc: "You take ownership of complex visit tasks, story logging, and community health check-ins." },
              { num: "04", title: "The Builder", subtitle: "Organizing for scale", desc: "You lead small volunteer clusters, organize local gatherings, and steward relationships." },
              { num: "05", title: "The Mentor", subtitle: "Holding space for others", desc: "You guide incoming volunteers through their first season, modeling relational leadership." },
              { num: "06", title: "The Legacy Keeper", subtitle: "Stewarding the vision", desc: "You embed community memory, shape long-term strategy, and safeguard our Ubuntu values." },
            ].map((st) => (
              <div key={st.num} className="p-8 bg-muted/40 border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[color:var(--color-secondary)]">{st.num}</span>
                    <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">Stage</span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl">{st.title}</h3>
                  <div className="text-xs uppercase tracking-wider text-[color:var(--color-primary)] font-semibold mt-1">
                    {st.subtitle}
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">
            Your journey is not linear. You may move between stages. The point is not speed—it is depth. Each stage offers opportunities to grow, contribute, and discover who you are becoming.
          </p>
        </div>
      </section>

      {/* Volunteer Community Photo Gallery */}
      <section ref={rGallery} className="reveal py-20 md:py-32 bg-muted/20 border-b border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow"><span className="rule-gold" />Youth Volunteers in Action</div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
                Faces of the movement.
              </h2>
            </div>
            <p className="max-w-md text-foreground/80 text-sm">
              Young people showing up across Zimbabwe with energy, reliability, and love.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { img: v1, alt: "Volunteer in red shirt at community gathering" },
              { img: v2, alt: "Young volunteer smiling during elder visit" },
              { img: v3, alt: "Youth volunteers conversing with elders" },
              { img: v4, alt: "Volunteer assisting elder with tasks" },
              { img: v5, alt: "Hibiscus volunteers group photo" },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-sm border border-border h-64 md:h-80">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white text-xs">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Invitation & Application Form */}
      <section ref={rForm} className="reveal py-24 md:py-36 bg-background">
        <div className="container-editorial max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <div className="eyebrow justify-center"><span className="rule-gold" />The Invitation</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Ready to discover who you will become?
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/85 text-lg leading-relaxed">
              You will not find a traditional volunteer programme here. We do not need free labour. We need young people who are willing to discover themselves while serving others.
            </p>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm leading-relaxed italic">
              If you are looking for a resume line, there are easier places to volunteer. If you are looking for a movement—a place where you can develop real leadership, build relationships that last, and create meaningful change—you have found us.
            </p>
          </div>

          <div className="border border-border p-8 md:p-14 bg-surface shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="eyebrow justify-center"><span className="rule-gold" />Application Received</div>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
                  Welcome to the movement, {values.fullName.split(" ")[0]}.
                </h2>
                <p className="mt-6 text-foreground/80 leading-relaxed max-w-lg mx-auto">
                  Your application is with us. A chapter coordinator will be in touch at{" "}
                  <span className="font-medium text-[color:var(--color-primary)]">{values.email}</span> within seven days to walk you through training and pairing.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(initial);
                    setSubmitted(false);
                  }}
                  className="mt-8 btn-primary"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-8">
                <div className="border-b border-border pb-4 mb-2">
                  <h3 className="font-serif text-2xl">Volunteer Application Form</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill in your details below to join the next volunteer cohort.
                  </p>
                </div>

                <Field label="Full name" error={errors.fullName}>
                  <input
                    type="text"
                    value={values.fullName}
                    onChange={update("fullName")}
                    maxLength={100}
                    placeholder="e.g. Tendai Moyo"
                    className="form-input"
                  />
                </Field>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Email address" error={errors.email}>
                    <input
                      type="email"
                      value={values.email}
                      onChange={update("email")}
                      maxLength={255}
                      placeholder="tendai@example.com"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone}>
                    <input
                      type="tel"
                      value={values.phone}
                      onChange={update("phone")}
                      maxLength={30}
                      placeholder="+263 77 123 4567"
                      className="form-input"
                    />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="City / Town" error={errors.city}>
                    <input
                      type="text"
                      value={values.city}
                      onChange={update("city")}
                      maxLength={100}
                      placeholder="e.g. Harare, Mutare, Bulawayo"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Age" error={errors.age}>
                    <input
                      type="number"
                      min={16}
                      max={120}
                      value={values.age}
                      onChange={update("age")}
                      placeholder="e.g. 21"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Availability" error={errors.availability}>
                  <select
                    value={values.availability}
                    onChange={update("availability")}
                    className="form-input"
                  >
                    <option value="">Select your availability…</option>
                    <option>Weekends</option>
                    <option>Weekday evenings</option>
                    <option>One Saturday a month</option>
                    <option>Flexible / Full Availability</option>
                  </select>
                </Field>

                <Field label="Why do you want to volunteer with Hibiscus?" error={errors.motivation}>
                  <textarea
                    value={values.motivation}
                    onChange={update("motivation")}
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell us about your motivation, skills, and hope for intergenerational service…"
                    className="form-input resize-y"
                  />
                  <div className="mt-2 text-xs text-muted-foreground flex justify-end">
                    {values.motivation.length}/1000
                  </div>
                </Field>

                <div className="pt-4">
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground mb-3 font-medium">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-2 block text-xs" style={{ color: "var(--color-primary)" }}>
          {error}
        </span>
      )}
    </label>
  );
}

