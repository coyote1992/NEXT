import { WEEK } from "@/lib/content";

const SLOTS = [8, 10, 17, 18, 19];
const slotLabel = (h: number) => `${String(h).padStart(2, "0")}–${String(h + 1).padStart(2, "0")}`;

/** The week at a glance: which group trains when. Only the hours that have groups are shown. */
export function WeekGrid() {
  return (
    <div className="week glass">
      <div className="week__grid" role="table" aria-label="Heti csoportbeosztás">
        <div role="row" className="week__row week__row--head">
          <span role="columnheader" className="week__corner">
            Óra
          </span>
          {WEEK.days.map((d) => (
            <span role="columnheader" key={d} className="week__day">
              {d}
            </span>
          ))}
        </div>
        {SLOTS.map((h) => (
          <div role="row" className="week__row" key={h}>
            <span role="rowheader" className="week__time num">
              {slotLabel(h)}
            </span>
            {WEEK.days.map((d, di) => {
              const items = WEEK.blocks.filter((b) => b.day === di && b.from === h);
              return (
                <span role="cell" key={d} className="week__cell">
                  {items.map((b) => (
                    <a key={b.slug + b.label} href={`#${b.slug}`} className={`week__chip week__chip--${b.slug}`}>
                      <strong>{b.label}</strong>
                      <span>{b.time}</span>
                    </a>
                  ))}
                </span>
              );
            })}
          </div>
        ))}
      </div>
      <ul className="week__list" aria-label="Heti csoportbeosztás napok szerint">
        {WEEK.days.map((d, di) => (
          <li key={d}>
            <p className="week__lday">{d}</p>
            <ul>
              {WEEK.blocks
                .filter((b) => b.day === di)
                .sort((a, b) => a.from - b.from)
                .map((b) => (
                  <li key={b.slug + b.from + b.label}>
                    <a href={`#${b.slug}`} className={`week__chip week__chip--${b.slug}`}>
                      <strong>{b.label}</strong>
                      <span>{b.time}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
