import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, FinalCta, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { CLUB, CONTACT, PARTNER_BENEFITS, PARTNERS, RESULTS, STARS, TIMELINE } from "@/lib/content";

export const metadata: Metadata = {
  title: "A klub",
  description: "A Dunakeszi Teniszklubot 1992-ben alapították. Magyarország egyik legnagyobb utánpótlás-teniszklubja: országos bajnokok, Champions Bowl címvédés, világsztárok a pályán.",
};

const EXTRAS = [
  {
    t: "Irány Amerika",
    s: "Jó külföldi kapcsolataink révén sok játékosunk amerikai egyetemeken tanul tovább teniszösztöndíjjal.",
    img: "/img/news/amerika.jpg",
  },
  {
    t: "Teljesítménydiagnosztika",
    s: "Korosztályos versenyzőink felkészülését Dr. Kovács Péter és az Edzéskontroll Kft. mérései is segítik.",
    img: "/img/news/diagnosztika.jpg",
  },
  {
    t: "Tanulás és sport",
    s: "Sportembereket nevelünk: figyelünk arra is, mi történik az iskolában, nyáron a klubház korrepetálásnak is helyet ad.",
    img: "/img/news/tanulas.jpg",
  },
];

export default function Club() {
  return (
    <>
      <PageHero
        eyebrow="A klub · 1992 óta"
        title={
          <>
            Pezsgő klubélet, <em>harminc év fölött.</em>
          </>
        }
        lead={`A Dunakeszi Teniszklubot ${CLUB.founders} alapította 1992-ben. Azóta igazi pezsgő klubélettel várjuk a teniszkedvelőket Dunakeszin, és Magyarország egyik legnagyobb utánpótlás-klubjává nőttünk.`}
        image="/img/photos/girls-team.jpg"
        alt="Fiatal teniszezők csapatképe a NEXON molinó előtt"
      />

      <section className="section section--tight" aria-labelledby="tort-title">
        <div className="container split2">
          <div>
            <Eyebrow>Klubtörténet</Eyebrow>
            <h2 className="h2" id="tort-title">
              Több száz gyerek, <em>egy szenvedély.</em>
            </h2>
            <div className="prose about__prose">
              <p>
                Az elmúlt évtizedekben több száz gyereket és felnőttet ismertettünk és szerettettünk meg a tenisszel. Több óvodával és iskolával állunk kapcsolatban egyedülálló iskolatenisz-programunk keretében.
              </p>
              <p>
                Edzőink Bogyó Tamás vezetésével az ITF gyermektenisz-programjának „Play and Stay” módszerével oktatják a jövő bajnokait már óvodás kortól. Évente rendezünk versenyeket amatőr játékosainknak, 6–8 utánpótlásversenyt és ITF-versenyeket is.
              </p>
            </div>
          </div>
          <ol className="timeline timeline--page">
            {TIMELINE.map((t) => (
              <li key={t.year} className="reveal">
                <span className="timeline__y num">{t.year}</span>
                <span className="timeline__t">{t.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight" id="eredmenyek" aria-labelledby="ered-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Eredmények · 2026</Eyebrow>
              <h2 className="h2" id="ered-title">
                A legjobb évünk <em>eddig.</em>
              </h2>
            </div>
            <p className="lead">Magyar bajnokaink méltán szereztek hírnevet egyesületünknek. 2026-ban a fedett pályás OB-n a klub fennállásának legjobb eredménye született.</p>
          </div>
          <div className="results__grid">
            {RESULTS.map((r, i) => (
              <article key={r.label} className="result glass reveal" style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
                <p className="result__big">{r.big}</p>
                <h3 className="result__label">{r.label}</h3>
                <p className="result__text">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="cb-title">
        <div className="container story">
          <div className="story__media">
            <div className="frame story__a">
              <Image src="/img/photos/cb-podium.jpg" alt="Díjátadó a Champions Bowl világdöntőjén" fill sizes="(max-width: 900px) 100vw, 34vw" />
            </div>
            <div className="frame story__b">
              <Image src="/img/photos/cb-parade.jpg" alt="A magyar csapat bevonulása" fill sizes="(max-width: 900px) 60vw, 20vw" />
            </div>
          </div>
          <div className="story__text">
            <Eyebrow>Champions Bowl</Eyebrow>
            <h2 className="h2" id="cb-title">
              Nemzetek Kupája, <em>címvédéssel.</em>
            </h2>
            <div className="prose">
              <p>
                A Champions Bowl magyarországi jogai a NEXON Dunakeszi Teniszklubnál vannak. A 2026-os poreči világdöntőre 27 játékossal érkezett a Bogyó Tamás vezette magyar csapat, minden idők legnépesebb magyar küldöttségeként, és megvédte a Nemzetek Kupáját. Korábban ez csak a spanyoloknak sikerült.
              </p>
              <p className="pullquote">
                „Nyolctól tizennyolc éves korig közös a cél, s ennek érdekében segítik, bátorítják egymást a különböző korosztályok képviselői.”
                <span>Bogyó Tamás</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="vilagsztarok" aria-labelledby="stars2-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Világsztárok a pályán</Eyebrow>
              <h2 className="h2" id="stars2-title">
                Ismerős arcok <em>a dunakeszi salakon.</em>
              </h2>
            </div>
            <p className="lead">Bogyó Tamás WTA- és ATP-játékosok edzője volt, és a klub vendége volt a világ teniszének több ismert alakja.</p>
          </div>
          <div className="starsgrid">
            {STARS.map((s, i) => (
              <figure key={s.name} className="star reveal" style={{ "--d": `${(i % 4) * 0.05}s` } as React.CSSProperties}>
                <div className="star__img frame">
                  <Image src={s.image} alt={s.name} fill sizes="(max-width: 700px) 50vw, 24vw" />
                </div>
                <figcaption>
                  <strong>{s.name}</strong>
                  <span>{s.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="A pályán túl">
        <div className="container">
          <div className="head">
            <Eyebrow>A pályán túl</Eyebrow>
            <h2 className="h2">
              Nemcsak teniszezőket, <em>sportembereket nevelünk.</em>
            </h2>
          </div>
          <div className="extras">
            {EXTRAS.map((e, i) => (
              <article key={e.t} className="extra glass reveal" style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
                <div className="extra__img">
                  <Image src={e.img} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
                <div className="extra__body">
                  <h3 className="h4">{e.t}</h3>
                  <p className="muted">{e.s}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="partnerek" aria-labelledby="partner-title">
        <div className="container">
          <div className="partners glass">
            <div className="partners__text">
              <Eyebrow>Legyél a partnerünk</Eyebrow>
              <h2 className="h3" id="partner-title">
                Több mint 30 éves hagyomány, <em>és lehetőség.</em>
              </h2>
              <p className="muted">
                Névadó szponzorunk, a NEXON Kft. több mint másfél évtizede áll mellettünk: nemzetközi versenyünk névadójaként, a csarnok felújításában és a mindennapokban is. Szponzorként a klub fejlődését támogatod, miközben a márkád ismertsége is nő.
              </p>
              <div className="btn-row">
                <a href={`tel:${CONTACT.partners.tel}`} className="btn btn--sm">
                  <Icon name="phone" /> {CONTACT.partners.phone}
                </a>
                <a href={`mailto:${CONTACT.partners.email}`} className="btn btn--sm btn--ghost">
                  <Icon name="mail" /> E-mail
                </a>
              </div>
            </div>
            <ul className="benefits">
              {PARTNER_BENEFITS.map((b) => (
                <li key={b}>
                  <Icon name="check" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <ul className="partners__logos partners__logos--page">
            {PARTNERS.map((p) => (
              <li key={p.name}>
                <Image src={p.logo} alt={p.name} width={p.w} height={60} style={{ width: p.w, height: "auto" }} />
              </li>
            ))}
          </ul>
          <p className="muted small partners__also">További támogatóink: Aquaworld Resort Budapest, Teletál.</p>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="slam-title">
        <div className="container split2">
          <div className="slam glass">
            <Eyebrow>Céges versenysorozat</Eyebrow>
            <h2 className="h3" id="slam-title">
              Business „SLAM”
            </h2>
            <p className="muted">
              Hagyományteremtő teniszverseny cégvezetőknek és kollégáiknak, a Grand Slam-tornák idejében és szellemében. 2025-ben „Roland Garros”, „Wimbledon” és „US Open” fordulóval, férfi és női egyéniben, valamint párosban.
            </p>
            <a href={`tel:${CONTACT.partners.tel}`} className="link-arrow">
              Érdeklődés: {CONTACT.partners.phone} <Icon name="arrow" />
            </a>
          </div>
          <a href={CLUB.shop} target="_blank" rel="noopener noreferrer" className="shop glass">
            <div className="shop__img">
              <Image src="/img/photos/rackets-clay.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
            <div className="shop__body">
              <Eyebrow>Webáruház</Eyebrow>
              <p className="h3">Dunakeszi teniszklubos termékek</p>
              <p className="muted">Galléros póló, póló, baseballsapka, kulacs, a klub címerével.</p>
              <span className="link-arrow">
                Tovább a webáruházba <Icon name="arrowUpRight" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
