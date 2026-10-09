import Image from "next/image";
import Link from "next/link";
import { BookingCard, BusRoute, CoachCard, Eyebrow, FinalCta, NewsCards, PriceTable, ProgramRows } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { MapCard } from "@/components/MapCard";
import { SeasonToggle } from "@/components/SeasonToggle";
import { CLUB, COACHES, CONTACT, PARTNERS, RESULTS, STARS, TESTIMONIALS, TIMELINE } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <Eyebrow>NEXON Dunakeszi Teniszklub · 1992 óta</Eyebrow>
            <h1 className="h1 hero__title">
              Játssz, és legyél <em>a&nbsp;legjobb.</em>
            </h1>
            <p className="lead hero__lead">
              Hét salakpálya, egész évben nyitva. Az óvodás első ütőfogásától az országos bajnoki címig: Magyarország egyik legnagyobb utánpótlás-teniszklubja, Dunakeszin.
            </p>
            <div className="paths">
              <Link href="/programok" className="path path--primary">
                <span className="path__t">
                  Edzést keresek <Icon name="arrow" />
                </span>
                <span className="path__s">Ovi-suli busszal, gyermek- és felnőttcsoportok, versenyzői képzés.</span>
              </Link>
              <a href={`tel:${CONTACT.booking.tel}`} className="path">
                <span className="path__t">
                  Pályát foglalnék <Icon name="phone" />
                </span>
                <span className="path__s">
                  {CONTACT.booking.name}: <strong>{CONTACT.booking.phone}</strong>. Minden nap 7–21.
                </span>
              </a>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__photo frame">
              <Image
                src="/img/photos/hero-serve.jpg"
                alt="Fiatal versenyző adogat a dunakeszi salakpályán"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 38vw"
              />
            </div>
            <Link href="/klub#eredmenyek" className="hero__chip glass">
              <span className="hero__chip-img">
                <Image src="/img/photos/cb-parade.jpg" alt="" fill sizes="120px" />
              </span>
              <span>
                <span className="hero__chip-k">2026 · Champions Bowl</span>
                <span className="hero__chip-t">Címvédés a világdöntőn</span>
              </span>
            </Link>
          </div>
        </div>
        <ul className="container hero__facts" aria-label="A klub számokban">
          <li>
            <span className="num">7</span> salakpálya
          </li>
          <li>
            <span className="num">1</span> fedett kemény pálya
          </li>
          <li>
            <span className="num">2</span> pályás fűtött sátor
          </li>
          <li>
            <span className="num">7–21</span> minden nap
          </li>
        </ul>
      </section>

      {/* ---------- ovi-suli spotlight ---------- */}
      <section className="section ovi" id="ovi-suli" aria-labelledby="ovi-title">
        <div className="container ovi__inner">
          <div className="ovi__media reveal">
            <div className="ovi__photo frame">
              <Image src="/img/photos/ovi-kid.jpg" alt="Mosolygó kisfiú teniszütővel" fill sizes="(max-width: 900px) 100vw, 46vw" />
            </div>
            <div className="ovi__photo2 frame">
              <Image
                src="/img/photos/bus-handover.jpg"
                alt="Bogyó Tamás átveszi a NEXON által biztosított kisbusz kulcsait"
                fill
                sizes="(max-width: 900px) 60vw, 22vw"
              />
              <span className="frame__cap">A NEXON kisbusza, 2026 tavaszán</span>
            </div>
          </div>
          <div className="ovi__text">
            <Eyebrow>Új · Ovi-suli teniszprogram</Eyebrow>
            <h2 className="h2" id="ovi-title">
              Az oviból egyenesen <em>a pályára.</em>
            </h2>
            <p className="lead">
              Tanítás után a klub saját kisbuszával hozzuk el a 4–8 éves gyerekeket az óvodából vagy az iskolából. Játékos, élményalapú edzés; ütőt, labdát adunk, csak sportcipő és lelkesedés kell.
            </p>
            <BusRoute />
            <ul className="ovi__facts">
              <li>
                <span className="num">4–8</span> éves korig
              </li>
              <li>
                <span className="num">1×</span> hetente
              </li>
              <li>
                <span className="num">8</span> gyerek fér a buszba
              </li>
            </ul>
            <div className="btn-row">
              <Link href="/ovi-suli" className="btn">
                Az ovi-suli programról <Icon name="arrow" />
              </Link>
              <a href={`tel:${CONTACT.club.tel}`} className="btn btn--ghost">
                Jelentkezés: {CONTACT.club.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- programmes (the racket stands on the right) ---------- */}
      <section className="section programs" id="programok" aria-labelledby="programs-title">
        <div className="container">
          <div className="programs__col">
            <div className="head">
              <Eyebrow>Edzések</Eyebrow>
              <h2 className="h2" id="programs-title">
                Az első ütőfogástól <em>a bajnoki címig.</em>
              </h2>
              <p className="lead">
                Ovisoknak, iskolásoknak, versenyzőknek és felnőtteknek: minden szintnek saját csoportja és edzője van. A gyerekeknek ütőt, labdát adunk.
              </p>
            </div>
            <ProgramRows compact />
            <div className="programs__foot">
              <Link href="/programok#het" className="link-arrow">
                A teljes heti beosztás <Icon name="arrow" />
              </Link>
              <Link href="/programok#tabor" className="link-arrow">
                Nyári tenisztábor <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- courts and booking (the court stands on the left) ---------- */}
      <section className="section courts" id="palyak" aria-labelledby="courts-title">
        <div className="container">
          <div className="courts__col">
            <div className="head">
              <Eyebrow>A pályák</Eyebrow>
              <h2 className="h2" id="courts-title">
                Salak nyáron, <em>fűtött sátor télen.</em>
              </h2>
              <p className="lead">
                Nyáron hét salakpálya és egy fedett Rebound Ace kemény pálya, télen két pályás fűtött sátor és fedett csarnok. Minden nap reggel héttől este kilencig, egész évben.
              </p>
            </div>
            <SeasonToggle />
            <div className="booking" id="foglalas">
              <div className="booking__head">
                <Eyebrow>Pályafoglalás</Eyebrow>
                <h3 className="h2 booking__title">
                  Pályát foglalni <em>egy telefon.</em>
                </h3>
              </div>
              <div className="booking__grid">
                <BookingCard />
                <PriceTable />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- history: 1992 forms beside the heading ---------- */}
      <section className="section history" id="tortenet" aria-labelledby="tortenet-title">
        <div className="container">
          <div className="history__col">
            <Eyebrow>Klubtörténet</Eyebrow>
            <h2 className="h2 history__title" id="tortenet-title">
              Salakon nőttünk fel, <em>1992 óta.</em>
            </h2>
            <p className="lead">
              A Dunakeszi Teniszklubot {CLUB.founders} alapította 1992-ben. Azóta több száz gyereket és felnőttet tanítottunk meg teniszezni, és Magyarország egyik legnagyobb utánpótlás-klubjává nőttünk.
            </p>
            <ol className="timeline">
              {TIMELINE.map((t) => (
                <li key={t.year} className="reveal">
                  <span className="timeline__y num">{t.year}</span>
                  <span className="timeline__t">{t.text}</span>
                </li>
              ))}
            </ol>
            <Link href="/klub" className="link-arrow">
              A klub története <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- results: the big ball spins behind ---------- */}
      <section className="section results" id="eredmenyek" aria-labelledby="results-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Eredmények · 2026</Eyebrow>
              <h2 className="h2" id="results-title">
                Ahol a bajnokok <em>edzenek.</em>
              </h2>
            </div>
            <blockquote className="results__quote">
              <p>„Az U12-es és U14-es korosztályban meghatározó klubbá nőttük ki magunkat.”</p>
              <cite>Bogyó Tamás, vezetőedző</cite>
            </blockquote>
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
          <div className="results__photos">
            <div className="frame reveal">
              <Image src="/img/photos/cb-parade.jpg" alt="A magyar csapat bevonulása a Champions Bowl világdöntőjén" fill sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="frame__cap">Champions Bowl világdöntő, Poreč, 2026</span>
            </div>
            <div className="frame reveal" style={{ "--d": "0.08s" } as React.CSSProperties}>
              <Image src="/img/photos/ob-l14.jpg" alt="Az országos bajnok L14-es csapat a dobogó tetején Bogyó Tamással" fill sizes="(max-width: 900px) 100vw, 25vw" />
              <span className="frame__cap">L14 csapat-ob, arany</span>
            </div>
            <div className="frame reveal" style={{ "--d": "0.16s" } as React.CSSProperties}>
              <Image src="/img/photos/cb-team.jpg" alt="A magyar küldöttség csapatfotója a világdöntőn" fill sizes="(max-width: 900px) 100vw, 25vw" />
              <span className="frame__cap">27 fős magyar csapat</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- head coach ---------- */}
      <section className="section section--tight" aria-labelledby="coach-quote">
        <div className="container">
          <figure className="founder glass reveal">
            <div className="founder__img">
              <Image src="/img/photos/tamas-clay.jpg" alt="Bogyó Tamás a salakpályán" fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
            <div className="founder__body">
              <Eyebrow>A vezetőedző</Eyebrow>
              <blockquote id="coach-quote">
                <p className="founder__q">
                  „A tenisz az életünk, de az iskola is nagyon fontos. <em>Boldog felnőtteket szeretnénk nevelni.</em>”
                </p>
              </blockquote>
              <figcaption>
                <strong>Bogyó Tamás</strong>
                <span>Elnök, vezetőedző. Kuti Kis Rita, Gubacsi Zsófia és Sávolt Attila egykori edzője.</span>
              </figcaption>
              <Link href="/edzok" className="link-arrow">
                Ismerd meg az edzőket <Icon name="arrow" />
              </Link>
            </div>
          </figure>
        </div>
      </section>

      {/* ---------- coaches ---------- */}
      <section className="section section--tight coaches-strip" aria-labelledby="coaches-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Edzőink</Eyebrow>
              <h2 className="h2" id="coaches-title">
                Profi edzők, <em>egy módszer.</em>
              </h2>
            </div>
            <p className="lead">Az ITF „Play and Stay” módszerével tanítunk már óvodás kortól. Bogyó Tamás vezetésével, szakképzett edzőkkel.</p>
          </div>
          <div className="coaches">
            {COACHES.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/edzok#${c.slug}`} className="reveal">
                <CoachCard c={c} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- stars ---------- */}
      <section className="section section--tight" aria-labelledby="stars-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Világsztárok a pályán</Eyebrow>
              <h2 className="h2" id="stars-title">
                A WTA-ból és az ATP-ből <em>ismerős arcok.</em>
              </h2>
            </div>
            <p className="lead">Bogyó Tamás WTA- és ATP-játékosok edzője volt, és a dunakeszi salakon is jártak a tenisz nagyjai.</p>
          </div>
        </div>
        <div className="stars" tabIndex={0} aria-label="Világsztárok a pályán, görgethető galéria">
          {STARS.map((s) => (
            <figure key={s.name} className="star">
              <div className="star__img frame">
                <Image src={s.image} alt={s.name} fill sizes="260px" />
              </div>
              <figcaption>
                <strong>{s.name}</strong>
                <span>{s.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- testimonials ---------- */}
      <section className="section section--tight" aria-label="Rólunk mondták">
        <div className="container quotes">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="quote reveal" style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}>
              <blockquote>
                <p>„{t.quote}”</p>
              </blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- news ---------- */}
      <section className="section section--tight" aria-labelledby="news-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <Eyebrow>Hírek</Eyebrow>
              <h2 className="h2" id="news-title">
                A klub <em>hétköznapjai.</em>
              </h2>
            </div>
            <Link href="/hirek" className="link-arrow head__link">
              Összes hír <Icon name="arrow" />
            </Link>
          </div>
          <NewsCards count={3} />
        </div>
      </section>

      {/* ---------- partners ---------- */}
      <section className="section section--tight" aria-labelledby="partners-title">
        <div className="container">
          <div className="partners glass">
            <div className="partners__text">
              <Eyebrow>Partnereink</Eyebrow>
              <h2 className="h3" id="partners-title">
                Névadó szponzorunk több mint másfél évtizede <em>a NEXON.</em>
              </h2>
              <Link href="/klub#partnerek" className="link-arrow">
                Legyél a klub partnere <Icon name="arrow" />
              </Link>
            </div>
            <ul className="partners__logos">
              {PARTNERS.map((p) => (
                <li key={p.name}>
                  <Image src={p.logo} alt={p.name} width={p.w} height={60} style={{ width: p.w, height: "auto" }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- visit ---------- */}
      <section className="section section--tight visit" aria-labelledby="visit-title">
        <div className="container visit__inner">
          <div>
            <Eyebrow>Hol vagyunk</Eyebrow>
            <h2 className="h2" id="visit-title">
              Fő út 145., <em>Dunakeszi.</em>
            </h2>
            <dl className="visit__rows">
              <div>
                <dt>Cím</dt>
                <dd>{CLUB.fullAddress}</dd>
              </div>
              <div>
                <dt>Nyitva</dt>
                <dd>Minden nap 07:00 – 21:00</dd>
              </div>
              <div>
                <dt>Pályafoglalás</dt>
                <dd>
                  <a href={`tel:${CONTACT.booking.tel}`}>{CONTACT.booking.phone}</a> · {CONTACT.booking.name}
                </dd>
              </div>
              <div>
                <dt>Edzések</dt>
                <dd>
                  <a href={`tel:${CONTACT.club.tel}`}>{CONTACT.club.phone}</a> · {CONTACT.club.name}
                </dd>
              </div>
              <div>
                <dt>Parkolás</dt>
                <dd>Ingyenes, a klub területén</dd>
              </div>
            </dl>
          </div>
          <MapCard />
        </div>
      </section>

      <FinalCta home />
    </>
  );
}
