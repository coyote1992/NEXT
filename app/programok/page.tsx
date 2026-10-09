import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, FinalCta, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { WeekGrid } from "@/components/WeekGrid";
import { CAMP, CONTACT, GROUP_LABEL, PROGRAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programok",
  description: "Ovi-suli tenisz buszos szállítással, gyermek kezdő és haladó csoport, U10 és korosztályos versenyzői képzés, felnőtt női és férfi csoport, egyéni képzés, nyári tábor.",
};

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programok"
        title={
          <>
            Mindenkinek megvan <em>a maga csoportja.</em>
          </>
        }
        lead="Négyévesen az ovi-suli busszal, iskolásként a kezdő és a haladó csoportban, versenyzőként heti 15 órában, felnőttként reggel vagy munka után. Az edzéseket a klub saját edzői tartják, Bogyó Tamás vezetésével."
        image="/img/photos/kids-group.jpg"
        alt="Gyerekek és edzők csoportképe a dunakeszi salakpályán"
      >
        <nav className="jump" aria-label="Ugrás">
          {(["gyerek", "verseny", "felnott"] as const).map((g) => (
            <a key={g} href={`#csoport-${g}`}>
              {GROUP_LABEL[g]}
            </a>
          ))}
          <a href="#het">Heti beosztás</a>
          <a href="#tabor">Nyári tábor</a>
        </nav>
      </PageHero>

      {(["gyerek", "verseny", "felnott"] as const).map((g) => (
        <section key={g} className="section section--tight" id={`csoport-${g}`} aria-labelledby={`h-${g}`}>
          <div className="container">
            <div className="grouphead">
              <Eyebrow>{GROUP_LABEL[g]}</Eyebrow>
              <h2 className="h2" id={`h-${g}`}>
                {g === "gyerek" ? (
                  <>
                    Játszva tanulnak, <em>és megszeretik.</em>
                  </>
                ) : g === "verseny" ? (
                  <>
                    A tehetség <em>itt munkává válik.</em>
                  </>
                ) : (
                  <>
                    Soha nem késő <em>elkezdeni.</em>
                  </>
                )}
              </h2>
            </div>
            <div className="pcards">
              {PROGRAMS.filter((p) => p.group === g).map((p) => (
                <article key={p.slug} id={p.slug} className="pcard glass reveal">
                  <div className="pcard__img">
                    <Image src={p.image} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 34vw" />
                  </div>
                  <div className="pcard__body">
                    <p className="pcard__age">{p.age}</p>
                    <h3 className="h3">{p.name}</h3>
                    <p className="pcard__text">{p.text}</p>
                    <ul className="pcard__sched">
                      {p.schedule.map((s) => (
                        <li key={s}>
                          <Icon name={p.slug === "ovi-suli" && s.startsWith("Busz") ? "bus" : "clock"} /> {s}
                        </li>
                      ))}
                    </ul>
                    <dl className="pcard__meta">
                      <div>
                        <dt>Edzők</dt>
                        <dd>{p.coaches.join(", ")}</dd>
                      </div>
                      <div>
                        <dt>Felszerelés</dt>
                        <dd>{p.gear}</dd>
                      </div>
                    </dl>
                    <div className="btn-row">
                      {p.slug === "ovi-suli" ? (
                        <Link href="/ovi-suli" className="btn btn--sm">
                          Részletek <Icon name="arrow" />
                        </Link>
                      ) : null}
                      <a href={p.apply.href} className={`btn btn--sm${p.slug === "ovi-suli" ? " btn--ghost" : ""}`}>
                        <Icon name={p.apply.href.startsWith("tel") ? "phone" : "mail"} /> Jelentkezés: {p.apply.label}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--tight" id="het" aria-labelledby="het-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Heti beosztás</Eyebrow>
              <h2 className="h2" id="het-title">
                A hét <em>a klubban.</em>
              </h2>
            </div>
            <p className="lead">A csoportos edzések időpontjai egy helyen. Kattints egy csoportra a részletekért.</p>
          </div>
          <WeekGrid />
        </div>
      </section>

      <section className="section section--tight" id="tabor" aria-labelledby="tabor-title">
        <div className="container camp">
          <div className="camp__text">
            <Eyebrow>Nyári tenisztábor</Eyebrow>
            <h2 className="h2" id="tabor-title">
              Az év <em>legsportosabb hete.</em>
            </h2>
            <p className="lead">Napi két teniszedzés, közte ebéd és közösségi játékok. Reggel fél kilenctől délután négyig.</p>
            <div className="camp__weeks">
              <p className="camp__label">{CAMP.year}-es turnusok</p>
              <ul>
                {CAMP.weeks.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="small muted">A következő nyár időpontjaiért írj nekünk, vagy hívj.</p>
            </div>
            <div className="btn-row">
              <a href={`mailto:${CONTACT.club.email}`} className="btn">
                <Icon name="mail" /> {CONTACT.club.email}
              </a>
              <a href={`tel:${CONTACT.club.tel}`} className="btn btn--ghost">
                <Icon name="phone" /> {CONTACT.club.phone}
              </a>
            </div>
          </div>
          <ol className="camp__day glass">
            <li className="camp__dayhead">Egy tábori nap</li>
            {CAMP.day.map((d) => (
              <li key={d.t}>
                <span className="num">{d.t}</span>
                <span>{d.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
