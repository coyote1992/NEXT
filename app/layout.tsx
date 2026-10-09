import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ActionBar } from "@/components/ActionBar";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SpaceBackground } from "@/components/space/SpaceBackground";
import "./globals.css";
import "./chrome.css";
import "./sections.css";
import "./pages.css";
import "./space.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dunakesziteniszklub.hu"),
  title: {
    default: "NEXON Dunakeszi Teniszklub · Tenisz Dunakeszin 1992 óta",
    template: "%s · NEXON Dunakeszi Teniszklub",
  },
  description:
    "Hét salakpálya, fedett kemény pálya, téli sátor és csarnok, egész évben minden nap 7–21 óráig. Ovi-suli teniszprogram buszos szállítással, gyermek- és felnőttcsoportok, versenyzői képzés Dunakeszin.",
  icons: { icon: "/img/logos/badge-nexon.png", apple: "/img/logos/badge-nexon.png" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "NEXON Dunakeszi Teniszklub",
    images: [{ url: "/img/photos/hero-serve.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#081e1f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`space ${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Ugrás a tartalomra
        </a>
        <SpaceBackground />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ActionBar />
        <RevealObserver />
      </body>
    </html>
  );
}
