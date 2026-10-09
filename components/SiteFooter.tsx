import Image from "next/image";
import Link from "next/link";
import { CLUB, CONTACT, NAV, PROGRAMS } from "@/lib/content";
import { Icon } from "./Icon";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Image src="/img/logos/badge-nexon.png" alt="A NEXON Dunakeszi Teniszklub címere" width={84} height={84} />
            <p className="h3">
              Játssz, és legyél <em>a legjobb.</em>
            </p>
            <address className="footer__addr">
              {CLUB.fullAddress}
              <br />
              <a href={`tel:${CONTACT.booking.tel}`}>{CONTACT.booking.phone}</a> · pályafoglalás
              <br />
              <a href={`mailto:${CONTACT.club.email}`}>{CONTACT.club.email}</a>
            </address>
            <div className="footer__social">
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
              <a href={CLUB.shop} target="_blank" rel="noopener noreferrer" aria-label="Webáruház">
                <Icon name="bag" />
              </a>
            </div>
          </div>
          <div className="footer__cols">
            <div>
              <p className="footer__h">Programok</p>
              <ul>
                {PROGRAMS.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.slug === "ovi-suli" ? "/ovi-suli" : `/programok#${p.slug}`}>{p.name}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/programok#tabor">Nyári tenisztábor</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer__h">Klub</p>
              <ul>
                {NAV.filter((n) => n.href !== "/programok").map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
                <li>
                  <a href={CLUB.shop} target="_blank" rel="noopener noreferrer">
                    Webáruház
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer__h">Nyitvatartás</p>
              <ul className="footer__hours">
                <li>
                  <span>Hétfő – Péntek</span>
                  <span>07:00 – 21:00</span>
                </li>
                <li>
                  <span>Szombat – Vasárnap</span>
                  <span>07:00 – 21:00</span>
                </li>
              </ul>
              <p className="footer__h footer__h--gap">Pályafoglalás</p>
              <p className="footer__note">
                {CONTACT.booking.name}
                <br />
                <a href={`tel:${CONTACT.booking.tel}`}>{CONTACT.booking.phone}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 {CLUB.name} · Dunakeszi, 1992 óta</span>
          <span>A klub névadó szponzora a NEXON Kft.</span>
        </div>
      </div>
    </footer>
  );
}
