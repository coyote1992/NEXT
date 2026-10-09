import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, FinalCta, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { COACHES, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Edzőink",
  description: "Bogyó Tamás vezetőedző és a NEXON Dunakeszi Teniszklub edzői: Varga Bence, Farkas István, Havasi Márk, Dolezsár Bence, Vajda László, Mároki Rebeka.",
};

export default function Coaches() {
  const [head, ...rest] = COACHES;
  return (
    <>
      <PageHero
        eyebrow="Edzőink"
        title={
          <>
            Akik a pálya <em>másik oldalán állnak.</em>
          </>
        }
        lead="Az ITF gyermektenisz-programjának „Play and Stay” módszerével tanítunk, már óvodás kortól. Szervezett, akkreditált programok, a legkisebbektől a legnagyobbakig."
      />

      <section className="section section--tight" id={head.slug} aria-labelledby="head-title">
        <div className="container">
          <article className="headcoach glass">
            <div className="headcoach__img">
              <Image src={head.image!} alt={head.name} fill sizes="(max-width: 900px) 100vw, 40vw" priority />
            </div>
            <div className="headcoach__body">
              <Eyebrow>{head.role}</Eyebrow>
              <h2 className="h2" id="head-title">
                {head.name}
              </h2>
              <div className="prose">
                {head.bio.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
              <ul className="career">
                {head.career!.map(([when, what]) => (
                  <li key={when + what}>
                    <span className="num">{when}</span>
                    <span>{what}</span>
                  </li>
                ))}
              </ul>
              <ul className="titles">
                {head.titles!.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href={`tel:${CONTACT.club.tel}`} className="btn btn--ghost">
                <Icon name="phone" /> {CONTACT.club.phone}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="team-title">
        <div className="container">
          <div className="head">
            <Eyebrow>A csapat</Eyebrow>
            <h2 className="h2" id="team-title">
              Edzőink <em>bemutatkoznak.</em>
            </h2>
          </div>
          <div className="team">
            {rest.map((c) => (
              <article key={c.slug} id={c.slug} className="member reveal">
                <div className="member__img frame">
                  {c.image ? <Image src={c.image} alt={c.name} fill sizes="(max-width: 700px) 100vw, 28vw" style={c.pos ? { objectPosition: c.pos } : undefined} /> : null}
                </div>
                <div className="member__body">
                  <h3 className="h3">{c.name}</h3>
                  <p className="member__role">{c.role}</p>
                  {c.bio.map((b) => (
                    <p key={b} className={b.startsWith("„") ? "member__q" : "muted"}>
                      {b}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="team__more muted">
            Az ovi-suli programot Vajda László mellett Tasi Imre vezeti. A versenyzők 2026-os felkészítését a Barcelonából érkezett Pau Bosch és Bottyán Tibor kondiedző is segítette.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
