"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT, NAV } from "@/lib/content";
import { Icon } from "./Icon";

export function SiteHeader() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const active = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <header className={`header${solid ? " header--solid" : ""}${open ? " header--open" : ""}`}>
      <div className="announce">
        <div className="container announce__inner">
          <span className="announce__item">
            Pályafoglalás: <a href={`tel:${CONTACT.booking.tel}`}>{CONTACT.booking.phone}</a>
          </span>
          <span className="announce__dot" aria-hidden="true" />
          <span className="announce__item announce__item--wide">Minden nap 7–21 óráig, egész évben</span>
          <span className="announce__dot announce__item--wide" aria-hidden="true" />
          <Link href="/ovi-suli" className="announce__item announce__link">
            Ovi-suli tenisz buszos szállítással <Icon name="arrow" />
          </Link>
        </div>
      </div>
      <div className="nav">
        <div className="container nav__inner">
          <Link href="/" className="brand" aria-label="NEXON Dunakeszi Teniszklub, kezdőlap">
            <Image src="/img/logos/badge-nexon.png" alt="" width={46} height={46} className="brand__badge" />
            <span className="brand__text">
              <span className="brand__name">Dunakeszi Teniszklub</span>
              <span className="brand__sub">NEXON · 1992 óta</span>
            </span>
          </Link>
          <nav className="nav__links" aria-label="Fő menü">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={active(n.href) ? "is-active" : undefined} aria-current={active(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="nav__cta">
            <a href={`tel:${CONTACT.booking.tel}`} className="btn btn--sm">
              <Icon name="phone" /> Pályafoglalás
            </a>
            <button
              type="button"
              className="nav__burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container mobile-menu__nav" aria-label="Mobil menü">
          <Link href="/" className={path === "/" ? "is-active" : undefined}>
            Kezdőlap
          </Link>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={active(n.href) ? "is-active" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="container mobile-menu__foot">
          <a href={`tel:${CONTACT.booking.tel}`} className="btn">
            <Icon name="phone" /> Pályafoglalás: {CONTACT.booking.phone}
          </a>
          <a href={`tel:${CONTACT.club.tel}`} className="btn btn--ghost">
            Edzések: {CONTACT.club.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
