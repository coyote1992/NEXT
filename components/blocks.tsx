import Image from "next/image";
import Link from "next/link";
import { CLUB, CONTACT, GROUP_LABEL, NEWS, PRICES, PROGRAMS, type Coach, type Program } from "@/lib/content";
import { Icon } from "./Icon";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** The opening of a subpage: eyebrow, big title, lead, and an optional floating photo. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  image?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`pagehero${image ? " pagehero--media" : ""}`}>
      <div className="container pagehero__inner">
        <div className="pagehero__text">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h1 pagehero__title">{title}</h1>
          <p className="lead">{lead}</p>
          {children}
        </div>
        {image ? (
          <div className="pagehero__media frame reveal">
            <Image src={image} alt={alt ?? ""} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

const programHref = (p: Program) => (p.slug === "ovi-suli" ? "/ovi-suli" : `/programok#${p.slug}`);

/** Programme rows grouped by audience: name, who it is for, when, and a way in. */
export function ProgramRows({ compact = false }: { compact?: boolean }) {
  const groups = (["gyerek", "verseny", "felnott"] as const).map((g) => ({ g, items: PROGRAMS.filter((p) => p.group === g) }));
  return (
    <div className="prows">
      {groups.map(({ g, items }) => (
        <div key={g} className="prows__group" id={compact ? undefined : `csoport-${g}`}>
          <p className="prows__label">{GROUP_LABEL[g]}</p>
          <ul>
            {items.map((p) => (
              <li key={p.slug} className="reveal">
                <Link href={programHref(p)} className="prow">
                  <span className="prow__main">
                    <span className="prow__name">{p.name}</span>
                    <span className="prow__short">{p.short}</span>
                  </span>
                  <span className="prow__meta">
                    <span className="prow__age">{p.age}</span>
                    <span className="prow__when">{p.schedule[0]}</span>
                  </span>
                  <span className="prow__go" aria-hidden="true">
                    <Icon name="arrow" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** The booking card: a phone number is the whole booking system, so it gets the stage. */
export function BookingCard() {
  return (
    <div className="bookcard glass">
      <p className="eyebrow">Pályafoglalás telefonon</p>
      <a className="bookcard__phone num" href={`tel:${CONTACT.booking.tel}`}>
        {CONTACT.booking.phone}
      </a>
      <p className="muted">
        {CONTACT.booking.name} foglal pályát, és segít megtalálni a legjobb időpontot. E-mailben is:{" "}
        <a className="text-link" href={`mailto:${CONTACT.booking.email}`}>
          {CONTACT.booking.email}
        </a>
      </p>
      <dl className="bookcard__rows">
        <div>
          <dt>Nyitva</dt>
          <dd>Minden nap, 07:00 – 21:00</dd>
        </div>
        <div>
          <dt>Szezon</dt>
          <dd>Egész évben</dd>
        </div>
        <div>
          <dt>Parkolás</dt>
          <dd>Ingyenes, a klub területén</dd>
        </div>
      </dl>
      <a className="btn" href={`tel:${CONTACT.booking.tel}`}>
        <Icon name="phone" /> Hívás most
      </a>
    </div>
  );
}

/** Court fees exactly as the club published them for the 2025/26 autumn–winter season. */
export function PriceTable() {
  return (
    <div className="prices glass">
      <div className="prices__head">
        <p className="h4">Téli pályadíjak</p>
        <span className="prices__season">{PRICES.season}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Hétköznap</th>
            <th scope="col">Alkalmi</th>
            <th scope="col">Bérlettel</th>
          </tr>
        </thead>
        <tbody>
          {PRICES.rows.map((r) => (
            <tr key={r.venue}>
              <th scope="row">{r.venue}</th>
              <td>
                <span className="num">{r.single}</span> Ft
              </td>
              <td>
                <span className="num">{r.pass}</span> Ft
              </td>
            </tr>
          ))}
          <tr className="prices__weekend">
            <th scope="row">Hétvégén</th>
            <td colSpan={2}>
              <span className="num">{PRICES.weekend}</span> Ft
            </td>
          </tr>
        </tbody>
      </table>
      <p className="prices__note">A klub által közzétett 2025/26-os őszi–téli díjak. Az aktuális szezon áraiért hívd a pályafoglalást.</p>
    </div>
  );
}

/** Kindergarten → minibus → court: the ovi-suli promise as a small route diagram. */
export function BusRoute() {
  return (
    <ol className="route" aria-label="Így jut el a gyerek a pályára">
      <li>
        <span className="route__dot" />
        <span className="route__t">Óvoda vagy iskola</span>
        <span className="route__s">tanítás után</span>
      </li>
      <li className="route__bus">
        <span className="route__dot">
          <Icon name="bus" />
        </span>
        <span className="route__t">A klub kisbusza</span>
        <span className="route__s">megbízható sofőrrel, max. 8 gyerek</span>
      </li>
      <li>
        <span className="route__dot route__dot--end" />
        <span className="route__t">Teniszpálya</span>
        <span className="route__s">{CLUB.fullAddress}</span>
      </li>
    </ol>
  );
}

export function CoachCard({ c, big = false }: { c: Coach; big?: boolean }) {
  return (
    <article className={`coach${big ? " coach--big" : ""}`}>
      <div className="coach__img frame">
        {c.image ? <Image src={c.image} alt={c.name} fill sizes="(max-width: 700px) 50vw, 22vw" style={c.pos ? { objectPosition: c.pos } : undefined} /> : null}
      </div>
      <h3 className="coach__name">{c.name}</h3>
      <p className="coach__role">{c.role}</p>
    </article>
  );
}

export function NewsCards({ count = 3 }: { count?: number }) {
  return (
    <div className="news">
      {NEWS.slice(0, count).map((n, i) => (
        <a key={n.url} href={n.url} target="_blank" rel="noopener noreferrer" className="newscard reveal" style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
          <div className="newscard__img">
            <Image src={n.image} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
          </div>
          <div className="newscard__body">
            <p className="newscard__date">{n.date}</p>
            <h3 className="newscard__title">{n.title}</h3>
            <p className="newscard__text">{n.text}</p>
            <span className="newscard__more">
              Tovább a cikkre <Icon name="arrowUpRight" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

/** The closing call to action. On the homepage the dots fall into a black hole above it. */
export function FinalCta({ home = false }: { home?: boolean }) {
  return (
    <section className={`final${home ? " final--home" : ""}`} aria-labelledby="final-title">
      <div className="container final__inner">
        <Image src="/img/logos/badge-nexon.png" alt="" width={72} height={72} className="final__badge" />
        <h2 className="h2" id="final-title">
          Találkozzunk <em>a salakon.</em>
        </h2>
        <p className="lead">Pályát foglalnál, vagy edzést keresel magadnak, a gyerekednek? Egy hívás, és segítünk.</p>
        <div className="btn-row final__ctas">
          <a className="btn btn--clay" href={`tel:${CONTACT.booking.tel}`}>
            <Icon name="phone" /> Pályafoglalás: {CONTACT.booking.phone}
          </a>
          <Link className="btn btn--ghost" href="/programok">
            Edzést keresek <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
