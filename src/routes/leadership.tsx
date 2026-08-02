import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { Leadership } from "@/components/site/Leadership";
import leaderHeroImg from "@/assets/NewPictures/WhatsApp Image 2026-07-26 at 19.42.14.jpeg";
import leaderPolaroidImg from "@/assets/NewPictures/WhatsApp Image 2026-07-26 at 19.42.11.jpeg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Meet the board of the Hibiscus Dotage Foundation — engineers, lawyers, accountants, physicians and operators building intergenerational care in Zimbabwe.",
      },
      { property: "og:title", content: "Leadership — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content:
          "Meet the board of the Hibiscus Dotage Foundation.",
      },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            The people who<br />
            carry the work.
          </>
        }
        lede="A quiet, uncommon board — engineers, lawyers, accountants, physicians, marketers and operators — who chose to spend their best hours on the elders of their country."
        primaryImage={leaderHeroImg}
        secondaryImage={leaderPolaroidImg}
        badge={{ value: "7", label: "Board Members" }}
      />
      <Leadership />
    </SiteFrame>
  );
}
