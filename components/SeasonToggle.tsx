"use client";

import Image from "next/image";
import { useState } from "react";
import { COURTS } from "@/lib/content";
import { Icon } from "./Icon";

/** Summer and winter are two different clubs: the toggle shows what is open when. */
export function SeasonToggle() {
  const [season, setSeason] = useState<"summer" | "winter">("summer");
  const s = COURTS[season];
  return (
    <div className="season">
      <div className="season__toggle" role="tablist" aria-label="Évszak">
        {(["summer", "winter"] as const).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            id={`season-tab-${k}`}
            aria-selected={season === k}
            aria-controls="season-panel"
            onClick={() => setSeason(k)}
          >
            <Icon name={k === "summer" ? "sun" : "snow"} /> {COURTS[k].label}
          </button>
        ))}
        <span className="season__thumb" data-pos={season} aria-hidden="true" />
      </div>
      <div className="season__panel" id="season-panel" role="tabpanel" aria-labelledby={`season-tab-${season}`}>
        <div className="season__media frame">
          {(["summer", "winter"] as const).map((k) => (
            <Image
              key={k}
              src={COURTS[k].image}
              alt={COURTS[k].alt}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={season === k ? "is-on" : undefined}
              aria-hidden={season !== k}
            />
          ))}
        </div>
        <div className="season__body">
          <h3 className="h3">{s.title}</h3>
          <p className="muted">{s.text}</p>
          <ul className="season__facts">
            {s.items.map((it) => (
              <li key={it.label}>
                <span className="num">{it.n}</span>
                <span>{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
