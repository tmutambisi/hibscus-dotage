import { useReveal } from "@/lib/use-reveal";
import PanasheImg from "@/assets/leadership/Panashe.jpeg";
import AudetteImg from "@/assets/leadership/Addute.jpeg";
import TinovimbaImg from "@/assets/leadership/Tinovimba.jpeg";
import IsabelImg from "@/assets/leadership/Isabel.jpeg";
import TsitsiImg from "@/assets/leadership/Tsitsi.jpeg";
import ValentineImg from "@/assets/leadership/Valentine.jpeg";

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
  const r = useReveal();
  return (
    <article
      ref={r}
      className="reveal group grid md:grid-cols-12 gap-8 md:gap-12 py-14 md:py-20 border-t border-border first:border-t-0"
    >
      <div className="md:col-span-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
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
            className="absolute left-0 bottom-0 h-px transition-all duration-700 group-hover:w-full"
            style={{ background: "var(--color-secondary)", width: "3rem" }}
          />
        </div>
        <div className="mt-4 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          <span>№ {String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-border" />
          <span>Board</span>
        </div>
      </div>

      <div className="md:col-span-8 md:pt-4">
        <div className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
          {member.role}
        </div>
        <h3 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.05]">
          {member.name}
        </h3>
        <p className="mt-6 max-w-2xl text-[1.02rem] leading-[1.9] text-foreground/85">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export function Leadership() {
  const r = useReveal();
  return (
    <section id="leadership" className="py-24 md:py-32 bg-background">
      <div className="container-editorial">
        <div ref={r} className="reveal grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <div className="eyebrow"><span className="rule-gold" />The Board</div>
            <h2 className="mt-8 font-serif text-4xl md:text-6xl leading-[1.02]">
              The people who carry the work.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 md:pt-4 text-foreground/80 leading-relaxed text-lg">
            A quiet, uncommon board — engineers, lawyers, accountants,
            physicians, marketers and operators — who chose to spend their best
            hours on the elders of their country.
          </p>
        </div>

        <div>
          {members.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
