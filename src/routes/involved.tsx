import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { GetInvolved } from "@/components/site/GetInvolved";
// import { Partners } from "@/components/site/Partners";

export const Route = createFileRoute("/involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Volunteer, sponsor, partner, donate, research or start a chapter. Six ways to belong to a movement that refuses to look away.",
      },
      { property: "og:title", content: "Get Involved — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content:
          "Six ways to belong to a movement that refuses to look away.",
      },
    ],
  }),
  component: InvolvedPage,
});

function InvolvedPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Join the Movement"
        title={
          <>
            We are the generation<br />
            that showed up.
          </>
        }
        lede="Six ways to belong. Pick the one that fits your season of life — the movement has a place for each of them."
      />
      <GetInvolved />
      {/* <Partners /> */}
    </SiteFrame>
  );
}
