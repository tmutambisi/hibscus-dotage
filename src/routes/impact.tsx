import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { Impact } from "@/components/site/Impact";
import { PhotoGallery } from "@/components/site/PhotoGallery";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "600+ volunteers. 80+ elders. Five communities. The receipts of a youth-led movement across Zimbabwe.",
      },
      { property: "og:title", content: "Impact — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content:
          "The receipts of a youth-led movement across Zimbabwe.",
      },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Impact"
        title={
          <>
            Small numbers,<br />
            kept faithfully.
          </>
        }
        lede="We measure what a village measures — visits kept, stories captured, families rejoined, and elders who now say the word 'grandchild' with a name attached."
      />
      <Impact />
      <PhotoGallery
        eyebrow="The receipts"
        title="Every number is a face, a home, an afternoon."
        columns={4}
        imageOffset={10}
        items={[
          { caption: "Interwoven Home Visits — Domboshava" },
          { caption: "PAOZ Africa Day — 100 participants" },
          { caption: "Ubumbano — Circles of Care" },
          { caption: "Muzukuru Project — school support" },
          { caption: "SilverCare — medical outreach" },
          { caption: "Golden Grit — livelihoods" },
          { caption: "Youth volunteers on the ground" },
          { caption: "Faith & community unity" },
        ]}
      />
    </SiteFrame>
  );
}
