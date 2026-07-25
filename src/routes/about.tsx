import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/SiteFrame";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { Leadership } from "@/components/site/Leadership";
import { PhotoGallery } from "@/components/site/PhotoGallery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hibiscus Dotage Foundation" },
      {
        name: "description",
        content:
          "A youth-led, Zimbabwe-rooted movement building intergenerational infrastructure so that growing old is met with care, purpose, and belonging.",
      },
      { property: "og:title", content: "About — Hibiscus Dotage Foundation" },
      {
        property: "og:description",
        content:
          "A youth-led, Zimbabwe-rooted movement building intergenerational infrastructure so that growing old is met with care, purpose, and belonging.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="About the Foundation"
        title={
          <>
            A quiet revolution,<br />
            carried by the young.
          </>
        }
        lede="Hibiscus Dotage Foundation was born from a simple observation: across Africa, the wisest among us are quietly being edged out of the room. We are the generation that decided to stay in the room with them."
      />
      <About />
      <Leadership />
      <PhotoGallery
        eyebrow="Faces of the Foundation"
        title="The people behind the movement."
        columns={3}
        imageOffset={0}
        items={[
          { caption: "Founding team portrait" },
          { caption: "Volunteer orientation day" },
          { caption: "Elder & youth in conversation" },
          { caption: "Community launch — Harare" },
          { caption: "Field team in Domboshava" },
          { caption: "Partner gathering" },
        ]}
      />
    </SiteFrame>
  );
}
