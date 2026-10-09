import type { Metadata } from "next";
import { FinalCta, NewsCards, PageHero } from "@/components/blocks";
import { Icon } from "@/components/Icon";
import { CLUB, NEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hírek",
  description: "Eredmények, új edzők, fejlesztések: a NEXON Dunakeszi Teniszklub hírei.",
};

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="Hírek"
        title={
          <>
            Ami a pályán <em>és mellette történik.</em>
          </>
        }
        lead="Bajnoki címek, új edzők, fejlesztések és a klub hétköznapjai."
      />
      <section className="section section--tight" aria-label="Friss hírek">
        <div className="container">
          <NewsCards count={NEWS.length} />
          <div className="news__more">
            <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Kövess minket a Facebookon <Icon name="arrowUpRight" />
            </a>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
