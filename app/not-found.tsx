import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CONTACT } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <p className="eyebrow">404 · Out</p>
        <h1 className="h1">
          Ez a labda <em>kiment.</em>
        </h1>
        <p className="lead" style={{ margin: "0 auto" }}>
          A keresett oldal nem található. Visszaütjük a kezdőlapra?
        </p>
        <div className="btn-row">
          <Link href="/" className="btn">
            Kezdőlap <Icon name="arrow" />
          </Link>
          <a href={`tel:${CONTACT.booking.tel}`} className="btn btn--ghost">
            <Icon name="phone" /> {CONTACT.booking.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
