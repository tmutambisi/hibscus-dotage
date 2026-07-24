import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";

const cards = [
  { key: "volunteer", title: "Volunteer", body: "Join a chapter, receive training, and be paired with an elder for the season.", cta: "Apply as a volunteer" },
  { key: "partner", title: "Partner", body: "For universities, NGOs, and civic institutions building alongside us.", cta: "Start a conversation" },
  { key: "donate", title: "Donate", body: "Every contribution funds visits, transport, medicine and gathering days.", cta: "Give with intention" },
  { key: "sponsor", title: "Sponsor an Elder", body: "Underwrite twelve months of care and presence for one specific elder.", cta: "Sponsor a covenant" },
  { key: "research", title: "Research", body: "Collaborate on gerontology, community health, and intergenerational studies.", cta: "Open a research thread" },
  { key: "chapter", title: "Community Chapter", body: "Bring the movement to your city, campus or congregation.", cta: "Start a chapter" },
];

const badges = ["First Visit", "Ten Weeks", "Story Keeper", "Chapter Lead", "Silver Circle", "Founding Volunteer"];

export function GetInvolved() {
  const [openKey, setOpenKey] = useState<string | null>("volunteer");
  const r = useReveal();
  const r2 = useReveal();
  return (
    <section id="involved" className="py-32 md:py-40 bg-background">
      <div className="container-editorial">
        <div ref={r} className="reveal max-w-4xl">
          <div className="eyebrow"><span className="rule-gold" />Join the Movement</div>
          <h2 className="mt-8 font-serif text-5xl md:text-7xl leading-[0.98]">
            We are the generation<br /> that showed up.
          </h2>
          <p className="mt-8 max-w-xl text-foreground/85 text-lg leading-relaxed">
            Six ways to belong. Pick the one that fits your season of life — the
            movement has a place for each of them.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-px bg-border border border-border">
          {cards.map((c) => {
            const open = openKey === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setOpenKey(open ? null : c.key)}
                className={`group text-left p-8 md:p-10 bg-background transition-colors duration-500 ${
                  open ? "bg-muted" : "hover:bg-muted/60"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">{c.title}</h3>
                    <p className={`mt-4 text-foreground/80 max-w-md overflow-hidden transition-all duration-500 ${
                      open ? "max-h-40 opacity-100" : "max-h-16 opacity-80"
                    }`}>
                      {c.body}
                    </p>
                    <span
                      className={`mt-6 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] transition-opacity duration-500 ${
                        open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ color: "var(--color-primary)" }}
                    >
                      {c.cta}
                      <span className="block h-px w-10" style={{ background: "var(--color-primary)" }} />
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className={`shrink-0 mt-2 h-px w-8 transition-all duration-500 ${
                      open ? "rotate-90" : ""
                    }`}
                    style={{ background: "var(--color-secondary)" }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Volunteer dashboard preview */}
        <div ref={r2} className="reveal mt-32 md:mt-40">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-10">
            <div className="md:col-span-6">
              <div className="eyebrow"><span className="rule-gold" />Volunteer Portal · Preview</div>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
                The quietest, most beautiful volunteer dashboard on the continent.
              </h3>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-muted-foreground">
              Track visits. Log reflections. Earn recognition. Built to feel like a
              private journal, not a corporate portal.
            </p>
          </div>

          <div
            className="rounded-sm border border-border overflow-hidden shadow-[0_30px_80px_-40px_rgba(106,30,44,0.35)]"
            style={{ background: "var(--color-surface)" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-secondary)]" />
                <span className="font-serif text-lg">Tendai · Muzukuru, Harare</span>
              </div>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                Season 04
              </span>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 p-8 border-b md:border-b-0 md:border-r border-border">
                <div className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Presence this season
                </div>
                <div className="mt-4 flex items-end justify-center">
                  <div className="relative h-40 w-40">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="var(--color-border)" strokeWidth="6" />
                      <circle
                        cx="50" cy="50" r="44" fill="none"
                        stroke="var(--color-primary)" strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 44 * 0.72} ${2 * Math.PI * 44}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="font-serif text-4xl">72%</div>
                      <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                        Weekly rhythm
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                    Recognition
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {badges.map((b, i) => (
                      <span
                        key={b}
                        className={`text-[0.68rem] uppercase tracking-[0.18em] px-3 py-1.5 border ${
                          i < 4 ? "border-[color:var(--color-secondary)]" : "border-border text-muted-foreground"
                        }`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 p-8">
                <div className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Recent visits
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {[
                    { d: "Sat, 12 Oct", who: "Gogo Ratidzai", note: "Sat on the veranda. Told me about her uncle who ran messages during the war." },
                    { d: "Sat, 05 Oct", who: "Sekuru Farai", note: "Blood pressure steady. He asked me to bring my siblings next time." },
                    { d: "Sat, 28 Sep", who: "Gogo Ratidzai", note: "We cooked sadza together. She corrected my stirring, gently." },
                  ].map((v) => (
                    <li key={v.d} className="py-5 grid grid-cols-12 gap-4">
                      <div className="col-span-3 text-sm text-muted-foreground">{v.d}</div>
                      <div className="col-span-9">
                        <div className="font-serif text-lg">{v.who}</div>
                        <p className="mt-1 text-sm text-foreground/80 italic">&ldquo;{v.note}&rdquo;</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
                  <div>
                    <div className="font-serif text-2xl">18</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Visits</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl">42h</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Presence</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl">6</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">Stories logged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
