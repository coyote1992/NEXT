import type { Metadata } from "next";
import Image from "next/image";
import { BusRoute, Eyebrow, FinalCta, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { CLUB, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ovi-suli teniszprogram",
  description:
    "Teniszprogram 4–8 éveseknek a NEXON Dunakeszi Teniszklubban: tanítás után a klub kisbuszával hozzuk el a gyerekeket az óvodából vagy az iskolából. Heti 1 alkalom, felszerelést adunk.",
};

const FOR_WHOM = [
  "4–8 éves gyerekeknek",
  "Kezdőknek és a sporttal most ismerkedőknek",
  "Akik játékos, élményalapú foglalkozást keresnek",
  "Elfoglalt szülőknek, akiknek sokat ér a buszos szállítás",
];

const WHY = [
  { t: "Mozgáskoordináció", s: "Játékosan fejleszti a koordinációt és az egyensúlyérzéket." },
  { t: "Koncentráció", s: "Segíti a koncentráció és a kitartás fejlődését." },
  { t: "Önbizalom", s: "Erősíti az önbizalmat, sikerélményt ad." },
  { t: "Együttműködés", s: "Megtanít csapatban és párban játszani." },
];

export default function OviSuli() {
  return (
    <>
      <PageHero
        eyebrow="Ovi-suli teniszprogram · 4–8 év"
        title={
          <>
            Ha bajnok akarsz lenni, <em>nem lehet elég korán kezdeni.</em>
          </>
        }
        lead="Tanítás után a klub saját kisbuszával hozzuk el a gyerekeket az óvodából vagy az iskolából, egyenesen a teniszpályára. Heti egy játékos, élményalapú edzés; ütőt, labdát adunk."
        image="/img/photos/ovi-kid.jpg"
        alt="Mosolygó kisfiú teniszütővel"
      >
        <div className="btn-row">
          <a href={`tel:${CONTACT.club.tel}`} className="btn">
            <Icon name="phone" /> Jelentkezés: {CONTACT.club.phone}
          </a>
          <a href={`mailto:${CONTACT.club.email}`} className="btn btn--ghost">
            <Icon name="mail" /> {CONTACT.club.email}
          </a>
        </div>
      </PageHero>

      <section className="section section--tight" aria-labelledby="busz-title">
        <div className="container">
          <div className="busband glass">
            <div className="busband__text">
              <Eyebrow>Buszos szállítás</Eyebrow>
              <h2 className="h2" id="busz-title">
                Nem kell rohannod <em>az oviba.</em>
              </h2>
              <p className="lead">
                Az egyesület saját buszával, megbízható sofőrrel szállítjuk a gyerekeket, közvetlenül a tanítás után. Biztonságos, szervezett megoldás, legfeljebb 8 gyerekkel.
              </p>
            </div>
            <BusRoute />
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="kinek-title">
        <div className="container split2">
          <div>
            <Eyebrow>Kinek ajánljuk?</Eyebrow>
            <h2 className="h2" id="kinek-title">
              Az első lépés <em>a sportban.</em>
            </h2>
            <ul className="checks">
              {FOR_WHOM.map((f) => (
                <li key={f}>
                  <Icon name="check" /> {f}
                </li>
              ))}
            </ul>
            <div className="gear glass">
              <p className="h4">Mit hozzon a gyerek?</p>
              <p className="muted">
                Saját ütő és labda nem kell: a felszerelést, a szakértelmet és a gyermekbarát környezetet mi adjuk. <strong>Csak sportcipő és lelkesedés kell.</strong>
              </p>
            </div>
          </div>
          <div>
            <Eyebrow>Miért jó a tenisz ebben a korban?</Eyebrow>
            <ul className="why">
              {WHY.map((w, i) => (
                <li key={w.t} className="reveal" style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
                  <span className="why__n num">0{i + 1}</span>
                  <span>
                    <strong>{w.t}</strong>
                    {w.s}
                  </span>
                </li>
              ))}
              <li className="reveal" style={{ "--d": "0.24s" } as React.CSSProperties}>
                <span className="why__n num">05</span>
                <span>
                  <strong>Öröm</strong>
                  Vidám, mozgásos, élményekkel teli foglalkozások.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="nexon-title">
        <div className="container story">
          <div className="story__media">
            <div className="frame story__a">
              <Image src="/img/photos/bus-handover.jpg" alt="Ocskay Szilárd átadja a kisbusz kulcsait Bogyó Tamásnak" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
            <div className="frame story__b">
              <Image src="/img/photos/bus-inside.jpg" alt="Bogyó Tamás és Ocskay Szilárd a kisbuszban" fill sizes="(max-width: 900px) 60vw, 20vw" />
            </div>
          </div>
          <div className="story__text">
            <Eyebrow>A busz története</Eyebrow>
            <h2 className="h2" id="nexon-title">
              A névadó szponzor <em>kulcsot adott.</em>
            </h2>
            <div className="prose">
              <p>
                A programhoz egyetlen dolog hiányzott: egy biztonságos gépjármű. A NEXON Kft. és ügyvezető igazgatója, Ocskay Szilárd egy 9 személyes Ford Transittal oldotta meg, amelynek üzembentartója a klub lett. A kulcsokat 2026 márciusában vette át Bogyó Tamás.
              </p>
              <p className="pullquote">
                „Büszkék vagyunk arra, hogy a támogatásunk révén kisiskolások ismerkedhetnek meg ezzel a gyönyörű sportággal, egy olyan klubban, ahol tényleg az utánpótlás-nevelésen van a hangsúly.”
                <span>Ocskay Szilárd, NEXON Kft.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="vezetok-title">
        <div className="container">
          <div className="leaders glass">
            <div className="leaders__img frame">
              <Image src="/img/coaches/vajda-laszlo.jpg" alt="Vajda László" fill sizes="(max-width: 900px) 60vw, 22vw" />
            </div>
            <div className="leaders__body">
              <Eyebrow>Programvezetők</Eyebrow>
              <h2 className="h3" id="vezetok-title">Vajda László és Tasi Imre</h2>
              <p className="muted">
                Vajda László 2025 nyarán érkezett Dunakeszire, és azóta a legfiatalabbak edzéseit irányítja. Mesterdiplomáját teniszedzőként szerezte.
              </p>
              <p className="leaders__q">
                „Játékosan, színesen, az ő szintjüknek megfelelően kezdjük az oktatást, miközben a közösség, a jó társaság megtartó erejére is építünk.”
              </p>
              <dl className="leaders__rows">
                <div>
                  <dt>Helyszín</dt>
                  <dd>
                    {CLUB.name}, {CLUB.fullAddress}
                  </dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${CONTACT.club.tel}`}>{CONTACT.club.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${CONTACT.club.email}`}>{CONTACT.club.email}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
