import imgHero from "@/assets/hibscuss/hero.jpeg";
import imgHero1 from "@/assets/hibscuss/hero1.jpeg";
import imgReading from "@/assets/hibscuss/reading.jpeg";
import imgVol3 from "@/assets/hibscuss/vol3.jpeg";
import imgGirlCleaning from "@/assets/hibscuss/girlcleaning.jpeg";
import imgVolunteer from "@/assets/hibscuss/volunteer.jpeg";
import imgWa1 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 14.21.54.jpeg";
import imgWa2 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.54.13.jpeg";
import imgWa3 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.54.13 (2).jpeg";
import imgWa4 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.54.14.jpeg";
import imgWa5 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.54.14 (1).jpeg";
import imgWa6 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.54.15 (1).jpeg";
import imgWa7 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.55.16.jpeg";
import imgWa8 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.55.16 (2).jpeg";
import imgWa9 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.55.16 (3).jpeg";
import imgWa10 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.58.31.jpeg";
import imgWa11 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.58.32.jpeg";
import imgWa12 from "@/assets/hibscuss/WhatsApp Image 2026-07-24 at 20.58.33.jpeg";

export const realFieldImages = [
  imgHero,
  imgWa1,
  imgVol3,
  imgWa2,
  imgGirlCleaning,
  imgWa3,
  imgWa4,
  imgVolunteer,
  imgWa5,
  imgReading,
  imgWa6,
  imgWa7,
  imgHero1,
  imgWa8,
  imgWa9,
  imgWa10,
  imgWa11,
  imgWa12,
];

export type GalleryItem = {
  src?: string;
  caption?: string;
  alt?: string;
};

export function PhotoGallery({
  eyebrow = "From the field",
  title,
  items,
  columns = 3,
  imageOffset = 0,
}: {
  eyebrow?: string;
  title?: string;
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  imageOffset?: number;
}) {
  const gridCls =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-3";

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container-editorial">
        <div className="mb-12 max-w-2xl">
          <div className="eyebrow">
            <span className="rule-gold" />
            {eyebrow}
          </div>
          {title && (
            <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              {title}
            </h3>
          )}
        </div>

        <div className={`grid grid-cols-1 ${gridCls} gap-6`}>
          {items.map((item, i) => {
            const src = item.src ?? realFieldImages[(i + imageOffset) % realFieldImages.length];
            return (
              <figure key={i} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={src}
                    alt={item.alt ?? item.caption ?? "Field photo"}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {item.caption && (
                  <figcaption className="mt-4 flex items-baseline gap-3 text-sm text-foreground/80">
                    <span
                      className="font-serif text-xs"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{item.caption}</span>
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
