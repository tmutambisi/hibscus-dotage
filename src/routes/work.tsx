import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { Work } from "@/components/site/Work";
import { PhotoGallery } from "@/components/site/PhotoGallery";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "What We Do — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "Five programmes reweaving intergenerational care in Zimbabwe — from in-home visits to livelihoods, mentorship and community gatherings.",
      },
      { property: "og:title", content: "What We Do — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content:
          "Five programmes reweaving intergenerational care in Zimbabwe.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Programmes, not<br />
            promises.
          </>
        }
        lede="Every intervention is small enough to keep, and durable enough to hand down. Together they form the scaffolding of a generation that shows up."
      />
      <Work />
      <PhotoGallery
        eyebrow="Programmes in action"
        title="Five doorways, one promise."
        columns={3}
        imageOffset={6}
        items={[
          { caption: "Golden Grit — able-bodied elders contributing" },
          { caption: "SilverCare — medical assistance" },
          { caption: "Ubumbano — Circles of Care" },
          { caption: "Elderly inmates outreach" },
          { caption: "Muzukuru Project — grandchildren supported" },
          { caption: "Community gatherings" },
        ]}
      />
    </SiteFrame>
  );
}
