"use client";

import Image from "next/image";
import { useState } from "react";
import { CLUB } from "@/lib/content";
import { Icon } from "./Icon";

/** The map loads only when asked, so no third-party request happens on page load. */
export function MapCard() {
  const [on, setOn] = useState(false);
  return (
    <div className="mapcard frame">
      {on ? (
        <iframe title="A klub a térképen" src={CLUB.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <>
          <Image src="/img/photos/courts-pano-2.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" className="mapcard__bg" />
          <div className="mapcard__veil">
            <Icon name="pin" className="mapcard__pin" />
            <p className="mapcard__addr">{CLUB.fullAddress}</p>
            <p className="small muted">A térképet a Google Maps szolgáltatása tölti be.</p>
            <div className="btn-row">
              <button type="button" className="btn btn--sm" onClick={() => setOn(true)}>
                Térkép betöltése
              </button>
              <a className="btn btn--sm btn--ghost" href={CLUB.mapsUrl} target="_blank" rel="noopener noreferrer">
                Útvonaltervezés <Icon name="arrowUpRight" />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
