"use client";

import { usePathname } from "next/navigation";
import { DotSpace } from "@/kits/dot-space/engine/react/DotSpace";
import "@/kits/dot-space/theme/space.css";
import { FONT_FALLBACK, HOME_STEPS, PALETTE } from "./config";

/** The display font as next/font names it, so "1992" is drawn in the site's own Cormorant. */
function displayFont() {
  if (typeof document === "undefined") return FONT_FALLBACK;
  const fam = getComputedStyle(document.documentElement).getPropertyValue("--font-cormorant").trim();
  return fam ? `italic 500 230px ${fam}` : FONT_FALLBACK;
}

/** One dot field behind every page: the shapes on the homepage, a quiet starfield elsewhere. */
export function SpaceBackground() {
  const home = usePathname() === "/";
  return <DotSpace key={home ? "home" : "quiet"} steps={home ? HOME_STEPS : undefined} palette={PALETTE} font={displayFont()} />;
}
