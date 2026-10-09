import type { Metadata } from "next";
import Image from "next/image";
import { BookingCard, Eyebrow, FinalCta, PageHero, PriceTable } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { MapCard } from "@/components/MapCard";
import { SeasonToggle } from "@/components/SeasonToggle";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pályák és pályafoglalás",
  description: "7 salakpálya és 1 fedett Rebound Ace kemény pálya nyáron, 2 pályás fűtött sátor és fedett csarnok télen. Pályafoglalás telefonon: +36 70 424 7925, minden nap 7–21.",
};

const WHY = [
  { icon: "calendar" as const, t: "Egész évben nyitva", s: "Nyári napsütésben és a hideg hónapokban is, minden nap várjuk a játékosokat." },
  { icon: "phone" as const, t: "Egyszerű foglalás telefonon", s: "Hívj minket, és azonnal segítünk megtalálni a legmegfelelőbb időpontot." },
  { icon: "ball" as const, t: "Gondozott pályák", s: "Minőségi salakpályák, barátságos klubhangulat és profi edzői háttér." },
  { icon: "parking" as const, t: "Ingyenes parkolás", s: "A klub területén, hogy a figyelmed teljesen a játékra irányulhasson." },
];

export default function Courts() {
  return (
    <>
      <PageHero
        eyebrow="Pályák · Pályafoglalás"
        title={
          <>
            Teniszklub, ami <em>egész évben nyitva van.</em>
          </>
        }
        lead="Nyáron hét salakpálya és egy fedett Rebound Ace kemény pálya, télen két pályás fűtött sátor és fedett csarnok. Minden nap reggel héttől este kilencig."
        image="/img/photos/courts-shade.jpg"
        alt="Salakpálya a NEXON molinókkal és a pálya mellé épített Umbroll napellenzővel"
      >
        <div className="btn-row">
          <a href={`tel:${CONTACT.booking.tel}`} className="btn">
            <Icon name="phone" /> Pályafoglalás: {CONTACT.booking.phone}
          </a>
        </div>
      </PageHero>

      <section className="section section--tight" aria-labelledby="szezon-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Nyár és tél</Eyebrow>
              <h2 className="h2" id="szezon-title">
                Két szezon, <em>egy klub.</em>
              </h2>
            </div>
            <p className="lead">Váltogass az évszakok között, és nézd meg, mi vár a pályán.</p>
          </div>
          <SeasonToggle />
        </div>
      </section>

      <section className="section section--tight" aria-label="Miért nálunk">
        <div className="container">
          <ul className="features">
            {WHY.map((w, i) => (
              <li key={w.t} className="feature reveal" style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
                <Icon name={w.icon} className="feature__ico" />
                <h3 className="h4">{w.t}</h3>
                <p className="muted">{w.s}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight" id="foglalas" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Pályafoglalás</Eyebrow>
              <h2 className="h2" id="foglalas-title">
                Pályát foglalni <em>egy telefon.</em>
              </h2>
            </div>
            <p className="lead">Bérlettel olcsóbb: a 2025/26-os téli díjak szerint hétköznap alkalmanként 500 forinttal kevesebbet fizetsz.</p>
          </div>
          <div className="booking__grid">
            <BookingCard />
            <PriceTable />
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="arnyek-title">
        <div className="container story">
          <div className="story__media">
            <div className="frame story__a">
              <Image src="/img/photos/courts-aerial.jpg" alt="Drónfelvétel a salakpályákról és a napellenzőkről" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
            <div className="frame story__b">
              <Image src="/img/news/arnyekolas.jpg" alt="Bogyó Tamás és vendége a pálya melletti napellenző alatt" fill sizes="(max-width: 900px) 60vw, 20vw" />
            </div>
          </div>
          <div className="story__text">
            <Eyebrow>Újdonság 2026</Eyebrow>
            <h2 className="h2" id="arnyek-title">
              Árnyék <em>a térfélcserékhez.</em>
            </h2>
            <div className="prose">
              <p>
                A hőség ellen a pályák mellé Umbroll napellenzők kerültek. A gomba alakú napernyőkkel ellentétben ezeket nem sodorja el a szél: a tartószerkezet a klub egyedi megrendelésére készült.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="terkep-title">
        <div className="container visit__inner">
          <div>
            <Eyebrow>Megközelítés</Eyebrow>
            <h2 className="h2" id="terkep-title">
              Fő út 145., <em>Dunakeszi.</em>
            </h2>
            <p className="lead">Parkolni a klub területén ingyenesen lehet.</p>
          </div>
          <MapCard />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
