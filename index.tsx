import { createFileRoute, Link } from "@tanstack/react-router";
import { Photo } from "@/components/site/Photo";
import { ReservationBand, SectionTitle, Waves } from "@/components/site/Layout";
import { FACILITIES, PARTNERS } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("STS Wellness, Spa & Reset | Your Spanish Wellness Escape", "Discover Spain, experience wellness and reset your life. Spa, tours and custom holidays from La Manga, Murcia."),
  component: Home,
});

const tiles = [
  { title: "Spa & Wellness", text: "Treatments, massages, hydrotherapy and personalised wellness.", to: "/spa-wellness", tone: "turquoise" as const },
  { title: "Activities & Tours", text: "Excursions, culture, gastronomy and outdoor adventures across Spain.", to: "/activities", tone: "olive" as const },
  { title: "Experience Packages", text: "Wellness, stays and tours combined into one custom holiday.", to: "/packages", tone: "gold" as const },
];

function Home() {
  const { t } = useT();
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-sea text-deep-foreground">
        <div className="absolute right-[12%] top-[14%] h-40 w-40 rounded-full bg-gold/70 blur-sm animate-sun md:h-56 md:w-56" aria-hidden />
        <Waves />
        <div className="relative mx-auto max-w-5xl px-4 text-center animate-rise">
          <p className="eyebrow">Your Spanish Escape · Your Wellness Journey · Your Experience</p>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">{t("heroTitle")}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base opacity-90 md:text-lg">{t("heroText")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/activities" className="btn-ghost-light">{t("explore")}</Link>
            <Link to="/reservations" search={{}} className="btn-gold">{t("book")}</Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 grid max-w-7xl gap-4 px-4 md:grid-cols-3">
        {tiles.map((x) => (
          <Link key={x.title} to={x.to} className="group overflow-hidden rounded-md bg-card shadow-soft transition hover:-translate-y-1">
            <div className="h-36"><Photo label={x.title} tone={x.tone} className="pointer-events-none h-full" /></div>
            <div className="p-6">
              <h3 className="text-2xl text-primary">{x.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.text}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-widest text-gold">Discover →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionTitle eyebrow="Our facilities" title="Spaces to slow down" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {FACILITIES.slice(0, 4).map((f, i) => (
            <Photo key={f.name} label={f.name} tone={(["sea", "sand", "turquoise", "olive"] as const)[i]} className="aspect-square"
              overlay={<span className="absolute inset-x-0 bottom-0 bg-veil p-4 font-display text-xl text-deep-foreground">{f.name}</span>} />
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/facilities" className="btn-sea">All facilities</Link></div>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle eyebrow="Gallery" title="Moments in La Manga" text="Illustrative images for now. Real photographs of STS, our guests and destinations coming soon." />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {["La Manga beach", "Spa moment", "Mar Menor sunset", "Spanish gastronomy", "Coastal excursion", "Relaxation lounge"].map((l, i) => (
              <Photo key={l} label={l} tone={(["sea", "sand", "gold", "olive", "turquoise", "sand"] as const)[i]} className={i === 0 ? "row-span-2 h-full min-h-60" : "aspect-[4/3]"} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep py-24 text-center text-deep-foreground">
        <p className="font-display text-[10rem] leading-none text-gold/30 md:text-[16rem]" aria-hidden>15</p>
        <div className="relative -mt-20 mx-auto max-w-3xl px-4 md:-mt-32">
          <p className="eyebrow">15th Anniversary</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Celebrating 15 Years of Wellness, Experiences & Memories!</h2>
          <p className="mt-6 opacity-80">15 Years of Creating Wellness, Happiness & Unforgettable Spanish Experiences.</p>
          <Link to="/anniversary" className="btn-gold mt-8">Celebrate with us</Link>
        </div>
      </section>

      <ReservationBand />

      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionTitle eyebrow="Our partners" title="Trusted local partners" />
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {PARTNERS.map((p) => (
            <div key={p} className="flex min-h-28 items-center justify-center bg-background p-6 text-center font-display text-xl text-primary">{p}</div>
          ))}
        </div>
      </section>

      <section className="bg-sand/50 py-24 text-center">
        <p className="mx-auto max-w-4xl px-4 font-display text-3xl leading-tight text-primary md:text-5xl">
          More than a spa. More than a holiday. It's your Spanish experience.
        </p>
      </section>
    </>
  );
}
