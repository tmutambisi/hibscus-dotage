import { useReveal } from "@/lib/use-reveal";
import PanasheImg from "@/assets/leadership/Panashe.jpeg";
import AudetteImg from "@/assets/leadership/Addute.jpeg";
import TinovimbaImg from "@/assets/leadership/Tinovimba.jpeg";
import IsabelImg from "@/assets/leadership/Isabel.jpeg";
import TsitsiImg from "@/assets/leadership/Tsitsi.jpeg";
import ValentineImg from "@/assets/leadership/Valentine.jpeg";
import NyashaImg from "@/assets/leadership/Nyasha.jpeg";

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
};

const members: Member[] = [
  {
    name: "Panashe Pemhiwa",
    role: "Founder & Chairperson",
    initials: "PP",
    image: PanasheImg,
    bio: "Founder and Chairperson of the Hibiscus Dotage Foundation and Curator of the Global Shapers Harare Hub, an initiative of the World Economic Forum. A Geomatics Engineer and social innovator, he is passionate about building sustainable, intergenerational solutions that promote healthy ageing, youth leadership, and resilient communities. His work brings together technology, policy, and community engagement to create lasting social impact.",
  },
  {
    name: "Audette Charlyne Madzamba",
    role: "Vice Chairperson",
    initials: "AM",
    image: AudetteImg,
    bio: "A marketing and communications professional with a Bachelor of Arts (Honours) in Media and Marketing Communications. She provides strategic leadership in advancing the Foundation's mission through effective communications, stakeholder engagement, and collaborative partnerships. She is passionate about leveraging strategic communication to promote the dignity, wellbeing, and inclusion of older persons while strengthening community-driven social impact.",
  },
  {
    name: "Tinovimbanashe Evelyn Munembe",
    role: "Secretary General",
    initials: "TM",
    image: TinovimbaImg,
    bio: "An entrepreneur, Business Development Specialist, and community leader committed to driving sustainable growth and social impact. Founder of Eve's Bakery, she brings expertise in business development, stakeholder engagement, and strategic partnerships. She is passionate about entrepreneurship, community empowerment, and creating opportunities that strengthen resilient and inclusive communities.",
  },
  {
    name: "Isabel Maunganidze",
    role: "Vice Secretary",
    initials: "IM",
    image: IsabelImg,
    bio: "A Legal Associate at Muvuti Mutswiri Law Group with expertise in legal research, analysis, and advocacy. She is passionate about using her legal knowledge to advance social impact and is deeply committed to community service, championing initiatives that promote justice, dignity, and sustainable development.",
  },
  {
    name: "Nyashadzaishe Samukange",
    role: "Treasurer",
    initials: "NS",
    image:NyashaImg,
    bio: "Oversees financial management and supports the organization's strategic and operational sustainability. A Chartered Accountant and social entrepreneur, he is passionate about youth empowerment, sustainable development, and building resilient, community-driven initiatives that create lasting social impact.",
  },
  {
    name: "Dr. Tsitsi Muguti",
    role: "Committee Member",
    initials: "TM",
    image: TsitsiImg,
    bio: "A medical doctor, volunteer, and Board Member. Raised in a small town, she has built her journey on resilience, excellence, and a deep commitment to service. A top female graduate in her class and a Millennium Fellowship alumna, she is passionate about advancing community health and creating opportunities for others through volunteerism. She believes that investing in people has the power to transform lives.",
  },
  {
    name: "Valentine Muponda",
    role: "Committee Member",
    initials: "VM",
    image: ValentineImg,
    bio: "An Operations and Logistics professional with expertise in transport operations, fleet management, and operational efficiency. Currently serving as an Operations Officer at BAUXIM Logistics, he specializes in logistics coordination, compliance, and process improvement. He is passionate about leveraging operational excellence to strengthen organizations and support sustainable, community-focused initiatives.",
  },
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <article
      className="group grid md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 border-t border-border first:border-t-0 opacity-100"
    >
      <div className="md:col-span-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted border border-border shadow-md">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 8%, var(--color-muted)) 0%, var(--color-muted) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif italic text-[7rem] md:text-[8rem] leading-none"
                  style={{ color: "color-mix(in srgb, var(--color-primary) 55%, transparent)" }}
                >
                  {member.initials}
                </span>
              </div>
            </>
          )}
          <div
            className="absolute left-0 bottom-0 h-1 transition-all duration-700 group-hover:w-full"
            style={{ background: "var(--color-secondary)", width: "3rem" }}
          />
        </div>
        <div className="mt-4 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground font-medium">
          <span>№ {String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-border" />
          <span>Board Member</span>
        </div>
      </div>

      <div className="md:col-span-8 md:pt-2">
        <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold">
          {member.role}
        </div>
        <h3 className="mt-3 font-serif text-3xl md:text-5xl leading-[1.05]">
          {member.name}
        </h3>
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.9] text-foreground/85">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export function Leadership() {
  const rChairman = useReveal();
  const rDoorways = useReveal();

  return (
    <div id="leadership" className="bg-background">
      {/* Message from the Chairman Section */}
      <section ref={rChairman} className="reveal py-20 md:py-32 bg-muted/40 border-b border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <aside className="md:col-span-4">
              <div className="eyebrow"><span className="rule-gold" />Message from the Chairman</div>
              <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-tight">
                An uncomfortable question, an unshakeable answer.
              </h2>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[color:var(--color-primary)] font-semibold">
                — Panashe Pemhiwa<br />Founder &amp; Chairperson, Hibiscus Dotage Foundation
              </p>
            </aside>

            <div className="md:col-span-7 md:col-start-6 space-y-6 text-[1.06rem] leading-[1.85] text-foreground/90">
              <p>
                Hibiscus Dotage Foundation was born from a simple but uncomfortable question:
                <em className="block font-serif text-2xl text-[color:var(--color-primary)] mt-2 not-italic border-l-2 border-[color:var(--color-secondary)] pl-4">
                  &ldquo;Why is it easier for one parent to raise five children, yet when those children are grown, they struggle to give back the same love to that one parent?&rdquo;
                </em>
              </p>
              <p>
                In Zimbabwe, and across Africa, aging is too often misunderstood. Harmful stereotypes paint the elderly as burdens, irrelevant, or even accused of things they are not. But aging is not a disease — it is a sacred way of life. And a society that values youth while neglecting its elders builds a future with no roots.
              </p>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground pt-2">
                Yes, the future is young. But the future is empty without honouring those who birthed and shaped it.
              </p>
              <p className="font-semibold text-[color:var(--color-primary)] uppercase tracking-wider text-sm pt-2">
                This is all engraved in our mantra — Young For The Elderly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Doorways into One Promise */}
      <section ref={rDoorways} className="reveal py-20 md:py-28 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow"><span className="rule-gold" />How We Answer</div>
            <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              Five doorways into one promise.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                num: "01",
                tag: "Golden Grit",
                body: "For elders who are able-bodied and still eager to contribute. We champion the longevity economy — where elders are active contributors, not passive recipients.",
              },
              {
                num: "02",
                tag: "SilverCare",
                body: "For elders who are sick, disabled, or living without support. We fundraise, advocate and provide essential medical assistance.",
              },
              {
                num: "03",
                tag: "Ubumbano — Circles of Care",
                body: "For elders who suffer deep loneliness. We surround them with presence, love and community.",
              },
              {
                num: "04",
                tag: "Elderly Inmates",
                body: "For elders behind bars. We remind them that dignity does not expire.",
              },
              {
                num: "05",
                tag: "Muzukuru Project",
                body: "For elders raising grandchildren. We support those children with fees, mentorship and care — because the wellbeing of a child is intertwined with the elder who raises them.",
              },
            ].map((p) => (
              <article key={p.tag} className="bg-background p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="font-serif text-lg text-[color:var(--color-secondary)] tracking-widest">
                    {p.num}
                  </div>
                  <h4 className="mt-3 font-serif text-2xl">{p.tag}</h4>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/80">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Board Directory */}
      <section className="py-24 md:py-32 bg-background border-t border-border">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-5">
              <div className="eyebrow"><span className="rule-gold" />The Board of Directors</div>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02]">
                Meet Our Leaders
              </h2>
            </div>
            <p className="md:col-span-6 md:col-start-7 md:pt-4 text-foreground/85 leading-relaxed text-lg">
              A quiet, uncommon board — engineers, lawyers, accountants,
              physicians, marketers and operators — who chose to spend their best
              hours on the elders of their country.
            </p>
          </div>

          <div className="divide-y divide-border border-b border-border">
            {members.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

