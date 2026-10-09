import { CLUB, CONTACT } from "@/lib/content";
import { Icon } from "./Icon";

/** Phones only: the two things people come for, always one thumb away. */
export function ActionBar() {
  return (
    <div className="actionbar" role="region" aria-label="Gyors elérés">
      <a href={`tel:${CONTACT.booking.tel}`} className="btn">
        <Icon name="phone" /> Pályafoglalás
      </a>
      <a href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
        <Icon name="pin" /> Útvonal
      </a>
    </div>
  );
}
