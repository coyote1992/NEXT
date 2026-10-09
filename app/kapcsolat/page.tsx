import type { Metadata } from "next";
import { Eyebrow, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { MapCard } from "@/components/MapCard";
import { CLUB, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: "NEXON Dunakeszi Teniszklub, 2120 Dunakeszi, Fő út 145. Pályafoglalás: +36 70 424 7925. Edzések: +36 70 945 0600. Nyitva minden nap 7–21.",
};

const CARDS = [
  {
    k: "Pályafoglalás",
    who: CONTACT.booking.name,
    phone: CONTACT.booking.phone,
    tel: CONTACT.booking.tel,
    email: CONTACT.booking.email,
    note: "Pályabérlés, bérletek, időpontok.",
  },
  {
    k: "Edzések, programok",
    who: `${CONTACT.club.name}, ${CONTACT.club.role.toLowerCase()}`,
    phone: CONTACT.club.phone,
    tel: CONTACT.club.tel,
    email: CONTACT.club.email,
    note: "Ovi-suli, csoportok, versenyzői képzés, tábor.",
  },
  {
    k: "Partnerség",
    who: "Szponzoráció, céges versenyek",
    phone: CONTACT.partners.phone,
    tel: CONTACT.partners.tel,
    email: CONTACT.partners.email,
    note: "Szponzori csomagok, Business SLAM.",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Kapcsolat"
        title={
          <>
            Keress minket, <em>szívesen segítünk.</em>
          </>
        }
        lead={`${CLUB.fullAddress}. Nyitva minden nap 07:00 és 21:00 között, egész évben.`}
      />
      <section className="section section--tight" aria-label="Elérhetőségek">
        <div className="container">
          <div className="contacts">
            {CARDS.map((c, i) => (
              <article key={c.k} className="contactcard glass reveal" style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
                <p className="eyebrow">{c.k}</p>
                <p className="contactcard__who">{c.who}</p>
                <a className="contactcard__phone num" href={`tel:${c.tel}`}>
                  {c.phone}
                </a>
                <a className="text-link contactcard__mail" href={`mailto:${c.email}`}>
                  {c.email}
                </a>
                <p className="muted small">{c.note}</p>
              </article>
            ))}
          </div>
          <p className="contacts__note muted">
            Egyes csoportokba (gyermek kezdő, korosztályos versenyzői, felnőtt női és férfi csoport) a{" "}
            <a className="text-link" href={`mailto:${CONTACT.groups}`}>
              {CONTACT.groups}
            </a>{" "}
            címen lehet jelentkezni.
          </p>
        </div>
      </section>
      <section className="section section--tight" aria-labelledby="hol-title">
        <div className="container visit__inner">
          <div>
            <Eyebrow>Hol vagyunk</Eyebrow>
            <h2 className="h2" id="hol-title">
              Fő út 145., <em>Dunakeszi.</em>
            </h2>
            <dl className="visit__rows">
              <div>
                <dt>Cím</dt>
                <dd>{CLUB.fullAddress}</dd>
              </div>
              <div>
                <dt>Hétfő – Péntek</dt>
                <dd>07:00 – 21:00</dd>
              </div>
              <div>
                <dt>Szombat – Vasárnap</dt>
                <dd>07:00 – 21:00</dd>
              </div>
              <div>
                <dt>Parkolás</dt>
                <dd>Ingyenes, a klub területén</dd>
              </div>
            </dl>
            <div className="btn-row contacts__social">
              <a className="btn btn--ghost btn--sm" href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" /> Facebook
              </a>
              <a className="btn btn--ghost btn--sm" href={CLUB.shop} target="_blank" rel="noopener noreferrer">
                <Icon name="bag" /> Webáruház
              </a>
            </div>
          </div>
          <MapCard />
        </div>
      </section>
    </>
  );
}
