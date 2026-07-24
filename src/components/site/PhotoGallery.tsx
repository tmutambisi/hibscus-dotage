import heroImg from "@/assets/hero.jpg";
import pageHeroImg from "@/assets/page-hero.jpg";

export type GalleryItem = {
  src?: string;
  caption?: string;
  alt?: string;
};

const defaultImages = [heroImg, pageHeroImg];

export function PhotoGallery({
  eyebrow = "From the field",
  title,
  items,
  columns = 3,
}: {
  eyebrow?: string;
  title?: string;
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
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
            const src = item.src ?? defaultImages[i % defaultImages.length];
            const isPlaceholder = !item.src;
            return (
              <figure key={i} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={src}
                    alt={item.alt ?? item.caption ?? "Photo placeholder"}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {isPlaceholder && (
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(23,17,18,0.75)] via-transparent to-transparent">
                      <div className="p-5 text-[0.65rem] uppercase tracking-[0.28em] text-primary-foreground/90">
                        Add photo · {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  )}
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
