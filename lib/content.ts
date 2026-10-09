// Every fact on the site comes from dunakesziteniszklub.hu (pages and news, as of 2026 October).
// Keep it that way: no invented prices, times, people or results.

export const CLUB = {
  name: "NEXON Dunakeszi Teniszklub",
  short: "NEXON Dunakeszi",
  founded: 1992,
  founders: "Bogyó László és felesége",
  address: "Fő út 145.",
  city: "2120 Dunakeszi",
  fullAddress: "2120 Dunakeszi, Fő út 145.",
  hours: "07:00 – 21:00",
  hoursNote: "Hétfőtől vasárnapig, egész évben",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dunakeszi+Teniszklub+F%C5%91+%C3%BAt+145",
  mapsEmbed: "https://maps.google.com/maps?q=Dunakeszi%20Teniszklub%2C%20Dunakeszi%2C%20F%C5%91%20%C3%BAt%20145&z=15&output=embed",
  facebook: "https://www.facebook.com/dunakesziteniszklub",
  shop: "https://ajandekweb.hu/dunakeszi-teniszklub",
  oldSite: "https://dunakesziteniszklub.hu",
};

export const CONTACT = {
  booking: { name: "Bogyó Marika", role: "Pályafoglalás", phone: "+36 70 424 7925", tel: "+36704247925", email: "bogyol@t-online.hu" },
  club: { name: "Bogyó Tamás", role: "Elnök, vezetőedző", phone: "+36 70 945 0600", tel: "+36709450600", email: "info@dunakesziteniszklub.hu" },
  partners: { role: "Partnerség, Business SLAM", phone: "+36 30 290 7242", tel: "+36302907242", email: "info@dunakesziteniszklub.hu" },
  groups: "tenyoka@gmail.com",
};

export const COURTS = {
  summer: {
    label: "Nyár",
    title: "Hét salakpálya és egy fedett kemény pálya",
    text: "Nyáron 7 minőségi salakos pálya és 1 fedett Rebound Ace kemény pálya várja a játékosokat, az év minden napján. A térfélcserékhez Umbroll napellenzők adnak árnyékot.",
    items: [
      { n: "7", label: "salakpálya" },
      { n: "1", label: "fedett Rebound Ace kemény pálya" },
    ],
    image: "/img/photos/courts-aerial.jpg",
    alt: "A dunakeszi salakpályák drónfelvételen, a pályák közepén a zöld Umbroll napellenzőkkel",
  },
  winter: {
    label: "Tél",
    title: "Fűtött sátor és fedett csarnok",
    text: "Télen a 2 pályás fűtött sátor és a fedett csarnok biztosítja, hogy a szezon ne álljon meg.",
    items: [
      { n: "2", label: "pályás fűtött sátor" },
      { n: "1", label: "fedett csarnok" },
    ],
    image: "/img/photos/tent-team.jpg",
    alt: "Fiatal játékosok és edzőjük a fűtött sátor salakpályáján",
  },
};

/** 2025/26 autumn–winter rates, as published on the club's site (price list image). */
export const PRICES = {
  season: "2025/26 ősz–tél",
  rows: [
    { venue: "Sátor", when: "Hétköznap", single: "8 500", pass: "8 000" },
    { venue: "Csarnok", when: "Hétköznap", single: "9 000", pass: "8 500" },
  ],
  weekend: "7 000",
};

export type Program = {
  slug: string;
  group: "gyerek" | "verseny" | "felnott";
  name: string;
  age: string;
  short: string;
  text: string;
  schedule: string[];
  coaches: string[];
  gear: string;
  apply: { label: string; href: string };
  image: string;
  alt: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "ovi-suli",
    group: "gyerek",
    name: "Ovi-suli teniszprogram",
    age: "4–8 év",
    short: "Busszal hozzuk el a gyerekeket az oviból vagy az iskolából, egyenesen a pályára.",
    text: "A legkisebbeknek szóló, játékos, élményalapú foglalkozás. Tanítás után az egyesület saját kisbuszával hozzuk el a gyerekeket az óvodából vagy az iskolából.",
    schedule: ["Heti 1 alkalom", "Buszos szállítás, max. 8 fő"],
    coaches: ["Vajda László", "Tasi Imre"],
    gear: "Ütőt, labdát adunk. Csak sportcipő kell.",
    apply: { label: "+36 70 945 0600", href: "tel:+36709450600" },
    image: "/img/photos/ovi-kid.jpg",
    alt: "Mosolygó kisfiú teniszütővel",
  },
  {
    slug: "gyermek-kezdo",
    group: "gyerek",
    name: "Gyermek kezdő csoport",
    age: "Kezdőknek",
    short: "Az alapok játékosan: ütőfogás, labdaérzék, első labdamenetek.",
    text: "Ideális hely arra, hogy a gyerekek elsajátítsák a tenisz alapjait, és közben örömmel mozogjanak. A tenisz a koncentrációt, a kitartást és a csapatszellemet is fejleszti.",
    schedule: ["Hétfő és szerda 17:00–18:00", "vagy kedd és csütörtök 17:00–18:00"],
    coaches: ["Farkas István", "Havasi Márk", "Dolezsár Bence"],
    gear: "Ütőt, labdát biztosítunk.",
    apply: { label: "tenyoka@gmail.com", href: "mailto:tenyoka@gmail.com" },
    image: "/img/photos/kid-crouch.jpg",
    alt: "Kisfiú guggol a salakon, labdára vár",
  },
  {
    slug: "gyermek-halado",
    group: "gyerek",
    name: "Gyermek haladó csoport",
    age: "Iskolásoknak",
    short: "Iskola mellett, jókedvű csapatban. Innen vezet az út a versenyzői csoportba.",
    text: "Tanuld meg a játék alapjait, és fejlődj edzőink segítségével egy támogató, jókedvű közösségben. Szorgalmas munkával a versenyzői csoportba is feljuthatsz.",
    schedule: ["Hétfő és szerda 18:00–19:00", "vagy kedd és csütörtök 17:00–18:00"],
    coaches: ["Farkas István", "Havasi Márk"],
    gear: "Ütőt, labdát biztosítunk.",
    apply: { label: "info@dunakesziteniszklub.hu", href: "mailto:info@dunakesziteniszklub.hu" },
    image: "/img/photos/boy-forehand.jpg",
    alt: "Fiú tenyeres ütés közben a salakon",
  },
  {
    slug: "u10",
    group: "verseny",
    name: "U10 versenyzői képzés",
    age: "10 év alatt",
    short: "Play and Stay módszer, heti 4 óra: technika, taktika, mozgás.",
    text: "Azoknak a gyerekeknek, akik már rendszeresen teniszeznek, és komolyabban fejlesztenék tudásukat. A heti 4 órás program technikailag, taktikailag és fizikailag is magasabb szintre emeli a jövő versenyzőit.",
    schedule: ["Hétfő, szerda, péntek 17:00-tól", "Szombat 10:00–11:00 koordináció"],
    coaches: ["Farkas István", "Bogyó Tamás"],
    gear: "Felszerelést biztosítunk.",
    apply: { label: "info@dunakesziteniszklub.hu", href: "mailto:info@dunakesziteniszklub.hu" },
    image: "/img/photos/boy-serve.jpg",
    alt: "Fiú adogat a salakpályán",
  },
  {
    slug: "korosztalyos",
    group: "verseny",
    name: "Korosztályos versenyzői képzés",
    age: "Versenyzőknek",
    short: "Heti 15 óra tenisz- és kondiedzés, válogatott korosztályos játékosokkal.",
    text: "Különleges közösség: válogatott korosztályos játékosok, külföldi és vidéki klubokból rendszeresen csatlakozó tehetségek edzenek együtt, inspirálva és motiválva egymást.",
    schedule: ["Heti 15 óra edzés", "Tenisz- és kondiedzések"],
    coaches: ["Bogyó Tamás", "Farkas István"],
    gear: "Intenzív versenyzői program.",
    apply: { label: "tenyoka@gmail.com", href: "mailto:tenyoka@gmail.com" },
    image: "/img/photos/girl-forehand.jpg",
    alt: "Versenyző lány tenyeres ütés közben",
  },
  {
    slug: "felnott-noi",
    group: "felnott",
    name: "Felnőtt női csoport",
    age: "Felnőtteknek",
    short: "Reggeli edzés két tapasztalt edzővel, jó hangulatú csapatban.",
    text: "Fejleszd a technikai és taktikai tudásodat egy lelkes közösségben. Két tapasztalt edző dolgozik a játékodon.",
    schedule: ["Szerda és péntek 08:00–09:00"],
    coaches: ["Farkas István", "Bogyó Tamás"],
    gear: "Ütőt biztosítunk. A parkolás ingyenes.",
    apply: { label: "tenyoka@gmail.com", href: "mailto:tenyoka@gmail.com" },
    image: "/img/photos/girl-orange.jpg",
    alt: "Teniszező a salakpályán, ütésre készül",
  },
  {
    slug: "felnott-ferfi",
    group: "felnott",
    name: "Felnőtt férfi csoport",
    age: "Felnőtteknek",
    short: "Esti edzés munka után: technika, taktika, motiváló csapat.",
    text: "Dolgozz a céljaidon egy motiváló, jó hangulatú csapatban. Tapasztalt edzőink segítenek, hogy a játékod minden területen fejlődjön.",
    schedule: ["Hétfő és szerda 19:00–20:00"],
    coaches: ["Farkas István", "Bogyó Tamás"],
    gear: "Ütőt biztosítunk. A parkolás ingyenes.",
    apply: { label: "tenyoka@gmail.com", href: "mailto:tenyoka@gmail.com" },
    image: "/img/photos/adult-forehand.jpg",
    alt: "Felnőtt játékos tenyeres ütés közben a NEXON molinó előtt",
  },
  {
    slug: "egyeni",
    group: "felnott",
    name: "Egyéni képzés",
    age: "Bármilyen szinten",
    short: "Személyre szabott edzés, a klub bármelyik edzőjével.",
    text: "Igény szerint a klub bármelyik tapasztalt edzőjével dolgozhatsz, hogy személyre szabott támogatást kapj. A sporttelepen a parkolás ingyenes.",
    schedule: ["Egyeztetés szerint"],
    coaches: ["Bármelyik edzőnk"],
    gear: "Időpont-egyeztetés e-mailben.",
    apply: { label: "info@dunakesziteniszklub.hu", href: "mailto:info@dunakesziteniszklub.hu" },
    image: "/img/photos/handshake.jpg",
    alt: "Két fiatal játékos kezet fog a háló fölött",
  },
];

export const GROUP_LABEL: Record<Program["group"], string> = {
  gyerek: "Gyerekeknek",
  verseny: "Versenyzőknek",
  felnott: "Felnőtteknek",
};

/** The weekly group timetable, built from the programme pages. */
export const WEEK = {
  days: ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
  blocks: [
    { day: 0, from: 17, to: 18, slug: "gyermek-kezdo", label: "Gyermek kezdő", time: "17–18" },
    { day: 0, from: 18, to: 19, slug: "gyermek-halado", label: "Gyermek haladó", time: "18–19" },
    { day: 0, from: 17, to: 18, slug: "u10", label: "U10 versenyzői", time: "17:00-tól", lane: 1 },
    { day: 0, from: 19, to: 20, slug: "felnott-ferfi", label: "Felnőtt férfi", time: "19–20" },
    { day: 1, from: 17, to: 18, slug: "gyermek-kezdo", label: "Gyermek kezdő", time: "17–18" },
    { day: 1, from: 17, to: 18, slug: "gyermek-halado", label: "Gyermek haladó", time: "17–18", lane: 1 },
    { day: 2, from: 8, to: 9, slug: "felnott-noi", label: "Felnőtt női", time: "8–9" },
    { day: 2, from: 17, to: 18, slug: "gyermek-kezdo", label: "Gyermek kezdő", time: "17–18" },
    { day: 2, from: 18, to: 19, slug: "gyermek-halado", label: "Gyermek haladó", time: "18–19" },
    { day: 2, from: 17, to: 18, slug: "u10", label: "U10 versenyzői", time: "17:00-tól", lane: 1 },
    { day: 2, from: 19, to: 20, slug: "felnott-ferfi", label: "Felnőtt férfi", time: "19–20" },
    { day: 3, from: 17, to: 18, slug: "gyermek-kezdo", label: "Gyermek kezdő", time: "17–18" },
    { day: 3, from: 17, to: 18, slug: "gyermek-halado", label: "Gyermek haladó", time: "17–18", lane: 1 },
    { day: 4, from: 8, to: 9, slug: "felnott-noi", label: "Felnőtt női", time: "8–9" },
    { day: 4, from: 17, to: 18, slug: "u10", label: "U10 versenyzői", time: "17:00-tól" },
    { day: 5, from: 10, to: 11, slug: "u10", label: "U10 koordináció", time: "10–11" },
  ] as { day: number; from: number; to: number; slug: string; label: string; time: string; lane?: number }[],
};

export const CAMP = {
  year: 2026,
  weeks: ["június 22–26.", "június 29. – július 3.", "július 27–31.", "augusztus 10–14.", "augusztus 17–21.", "augusztus 24–28."],
  day: [
    { t: "8:30–9:00", what: "Érkezés" },
    { t: "9:00–10:00", what: "Bemelegítés" },
    { t: "10:00–12:00", what: "Teniszedzés" },
    { t: "13:00–14:00", what: "Ebéd után közösségi játékok, szabad foglalkozás" },
    { t: "14:00–16:00", what: "Teniszedzés" },
    { t: "16:00", what: "A napi program vége" },
  ],
};

export type Coach = { slug: string; name: string; role: string; image?: string; pos?: string; bio: string[]; career?: [string, string][]; titles?: string[] };

export const COACHES: Coach[] = [
  {
    slug: "bogyo-tamas",
    name: "Bogyó Tamás",
    role: "Elnök, vezetőedző",
    image: "/img/coaches/bogyo-tamas.jpg",
    bio: [
      "A klub elnöke és vezetőedzője. Edzői pályája során WTA- és ATP-játékosokkal dolgozott, a magyar ITF Elite Team edzője volt, ma a Magyar Tenisz Szövetség Pest megyei igazgatóságának igazgatója.",
      "Rendszeres előadója az USTA, az LTA és az STF teniszszövetségeknek, meghívott előadó a PTR, GPTCA és BTC konferenciákon.",
    ],
    career: [
      ["2000–2004", "Kuti Kis Rita edzője (WTA 39)"],
      ["2000–2004", "Gubacsi Zsófia edzője (WTA 68)"],
      ["2004–2010", "Sávolt Attila edzője (ATP 69)"],
      ["2004–2010", "Király Pálma edzője (WTA 399)"],
      ["2012–2015", "Hungarian ITF Elite Team Coach"],
      ["2016", "Stollár Fanni"],
      ["2017–2018", "Nagy Péter edzője (ATP 409)"],
      ["2018", "Denis Shapovalov és Nagy Péter mellett a teljes szezonban, Monte-Carlótól Roland Garrosig"],
      ["2019", "10 hetes edzésprogram Christian Lerbyvel (ITF top 100 junior)"],
    ],
    titles: [
      "Az MTSZ Pest megyei igazgatóságának igazgatója",
      "A Brain Game (Craig O’Shannessy) program és az OncourtOffcourt.com hivatalos partnere",
      "A Backswing Solution eszköz innovátora",
      "TopSpin Pro és EyeCoach Ambassador",
    ],
  },
  {
    slug: "varga-bence",
    name: "Varga Bence",
    role: "Utánpótlás-edző, felnőtt oktató, iskolatenisz-program vezető",
    image: "/img/coaches/varga-bence.jpg",
    bio: [
      "MTSZ C licences szakedző a Testnevelési Egyetemről. Partnerjátékosként a Speciális Olimpia több világversenyén is részt vett.",
      "A legkisebbeket ő állítja a versenyzői útra: az U10-es és még fiatalabb generációk felkészítése az ő kezében van.",
    ],
  },
  {
    slug: "farkas-istvan",
    name: "Farkas István",
    role: "Utánpótlás-edző, felnőtt oktató",
    image: "/img/coaches/farkas-istvan.jpg",
    bio: ["A gyermek kezdő és haladó csoportok, az U10-es és a korosztályos versenyzői képzés, valamint a felnőtt csoportok edzője."],
  },
  {
    slug: "havasi-mark",
    name: "Havasi Márk",
    role: "Utánpótlás-edző",
    image: "/img/coaches/havasi-mark.jpg",
    bio: [
      "Londonban az angol LTA teniszoktatói képzésének három szintjét végezte el. 2023 tavasza óta dolgozik Dunakeszin a 6–14 éves korosztállyal.",
      "„Fontos, hogy szeressék, amit csinálnak, így lehet ugyanis sokáig pályán tartani őket.”",
    ],
  },
  {
    slug: "dolezsar-bence",
    name: "Dolezsár Bence",
    role: "Play+Stay edző",
    image: "/img/coaches/dolezsar-bence.jpg",
    bio: [
      "Koppenhágában döntötte el, hogy edzőként éli meg a sportág iránti szeretetét. Teniszoktatói diplomáját a Testnevelési Egyetemen szerezte.",
      "„Akkor leszek elégedett, ha nemcsak ügyes teniszezők válnak a tanítványaimból, de fegyelmezett, sportszerű felnőttek is.”",
    ],
  },
  {
    slug: "vajda-laszlo",
    name: "Vajda László",
    role: "Az ovi-suli teniszprogram vezetője",
    image: "/img/coaches/vajda-laszlo.jpg",
    bio: [
      "2025 nyarán érkezett Dunakeszire, egy nagyon sikeres gyermektáborral mutatkozott be. Szombat délelőttönként az ovis és a piros pályás játékosokkal foglalkozik.",
      "Mesterdiplomáját teniszedzőként szerezte, a Testnevelési Egyetemen hazai diplomát is szerzett.",
    ],
  },
  {
    slug: "maroki-rebeka",
    name: "Mároki Rebeka",
    role: "Edző",
    image: "/img/coaches/maroki-rebeka.jpg",
    bio: [
      "Kilencévesen Dunakeszin, Bogyó Tamás irányításával ismerkedett meg a tenisszel. Tizenhat éves koráig a hazai top 10-ben volt, tizenöt évesen bronzérmet nyert a felnőtt országos bajnokság női párosában.",
      "2026 szeptemberétől edzőként erősíti a klubot.",
    ],
  },
];

export const RESULTS = [
  {
    big: "Címvédés",
    label: "Champions Bowl világdöntő, Poreč",
    text: "A Bogyó Tamás vezette magyar csapat 2026-ban is megnyerte a Nemzetek Kupáját. 27 ország, közel 240 fiatal teniszező, a valaha volt legnépesebb magyar csapat.",
    year: "2026",
  },
  {
    big: "6 · 3 · 1",
    label: "Fedett pályás korosztályos OB",
    text: "Hat arany, három ezüst és egy bronz: a klub fennállásának eddigi legjobb eredménye.",
    year: "2026",
  },
  {
    big: "2 csapat",
    label: "Korosztályos országos bajnok",
    text: "Az L14-es és az F14-es csapat is országos bajnok lett a Dorko korosztályos OB-n. Összesen 7 érem, köztük 4 arany.",
    year: "2026",
  },
];

export const STARS = [
  { name: "Kuti Kis Rita", note: "WTA 39 · Bogyó Tamás edzette 2000–2004", image: "/img/stars/kuti-kis-rita.jpg" },
  { name: "Sávolt Attila", note: "ATP 69 · Bogyó Tamás edzette 2004–2010", image: "/img/stars/savolt-attila.jpg" },
  { name: "Gubacsi Zsófia", note: "WTA 68 · Bogyó Tamás edzette 2000–2004", image: "/img/stars/gubacsi-zsofia.jpg" },
  { name: "Denis Shapovalov és Nagy Péter", note: "2018 · egy csapatban a teljes szezonban", image: "/img/stars/shapovalov-nagy.jpg" },
  { name: "Marozsán Fábián", note: "Világsztárok a pályán", image: "/img/stars/marozsan-fabian.jpg" },
  { name: "Marta Kostyuk", note: "Világsztárok a pályán", image: "/img/stars/marta-kostyuk.jpg" },
  { name: "Nagy Péter", note: "ATP 409 · 2017–2018", image: "/img/stars/nagy-peter.jpg" },
  { name: "Christian Lerby", note: "2019 · 10 hetes edzésprogram", image: "/img/stars/christian-lerby.jpg" },
  { name: "Sávolt Attila és Fucsovics Márton", note: "Világsztárok a pályán", image: "/img/stars/savolt-fucsovics.jpg" },
];

export const TIMELINE = [
  { year: "1992", text: "Bogyó László és felesége megalapítja a Dunakeszi Teniszklubot." },
  { year: "2000–2010", text: "Bogyó Tamás WTA- és ATP-játékosok edzője: Kuti Kis Rita, Gubacsi Zsófia, Sávolt Attila." },
  { year: "2012–2015", text: "A magyar ITF Elite Team edzője." },
  { year: "2018", text: "Denis Shapovalov és Nagy Péter csapatában Monte-Carlótól Roland Garrosig." },
  { year: "2026", text: "Rekord a fedett OB-n, két csapat országos bajnoki cím, elindul az ovi-suli program, és címvédés a Champions Bowl világdöntőjén." },
];

export const TESTIMONIALS = [
  {
    quote: "Nagyon jó pályák, egyik új kedvencem! Ha pedig egy kiváló teniszoktatót kerestek bármilyen szinten, Havasi Márkot szívből ajánlom!",
    name: "Dr. Márton Alpár",
  },
  {
    quote: "A klub barátságos és segítőkész, az ilyen helyen igazi élmény sportolni! Mindenkinek csak ajánlani tudom, kezdőknek és profiknak egyaránt.",
    name: "Katona János",
  },
];

export const NEWS = [
  {
    title: "Történelmi címvédés a világdöntőn",
    date: "2026. október 7.",
    text: "A magyar küldöttség nyerte a Nemzetek Kupáját a Champions Bowl világdöntőjében. A Bogyó Tamás vezette csapat ezzel megvédte címét, ami korábban csak a spanyoloknak sikerült.",
    image: "/img/news/cimvedes.jpg",
    url: "https://dunakesziteniszklub.hu/2026/10/tortenelmi-cimvedes-a-vilagdonton/",
  },
  {
    title: "Rebeka hazatért Dunakeszire",
    date: "2026. szeptember 18.",
    text: "Mároki Rebeka, a klub saját nevelésű egykori játékosa, aki korosztályos játékosként a hazai élvonalhoz tartozott, most edzőként erősíti csapatunkat.",
    image: "/img/news/maroki.jpg",
    url: "https://dunakesziteniszklub.hu/2026/09/4714/",
  },
  {
    title: "Az ob-sikerek munkára épülnek",
    date: "2026. augusztus 19.",
    text: "Hét érmet, köztük négy aranyat szereztek fiatal teniszezőink a Dorko Korosztályos Országos Bajnokságon. Az L14-es és az F14-es csapat is a dobogó tetejére állt.",
    image: "/img/news/ob-2026.jpg",
    url: "https://dunakesziteniszklub.hu/2026/08/az-ob-sikerek-munkara-epulnek/",
  },
  {
    title: "Tanulás és sport",
    date: "2026. július 30.",
    text: "Szakembereink nemcsak teniszjátékosokat, hanem sportembereket is nevelnek. Ennek szellemében arra is figyelünk, mi történik az iskolában.",
    image: "/img/news/tanulas.jpg",
    url: "https://dunakesziteniszklub.hu/2026/07/tanulas-es-sport/",
  },
  {
    title: "Nexonos éremeső Szegeden",
    date: "2026. június 30.",
    text: "Nyolc éremmel, köztük három arannyal tértek haza teniszezőink a korosztályos vidékbajnokságról. Az U14-ben a leány- és a fiúcsapatok versenyét is megnyertük.",
    image: "/img/news/szeged.jpg",
    url: "https://dunakesziteniszklub.hu/2026/06/nexonos-eremeso-szegeden/",
  },
  {
    title: "Egyedi árnyékolással a hőség ellen",
    date: "2026. június 8.",
    text: "Pályáinkon Umbroll napellenzők adnak védelmet a tűző nap ellen a térfélcserék idejére. A tartószerkezet egyedi megrendelésünkre készült.",
    image: "/img/news/arnyekolas.jpg",
    url: "https://dunakesziteniszklub.hu/2026/06/egyedi-arnyekolassal-a-hoseg-ellen/",
  },
  {
    title: "Bajnokok vacsorája",
    date: "2026. március 31.",
    text: "Fennállásának eddigi legjobb eredményét érte el a klub a fedett pályás korosztályos országos bajnokságon: hat arany-, három ezüst- és egy bronzérem.",
    image: "/img/news/bajnokok.jpg",
    url: "https://dunakesziteniszklub.hu/2026/03/bajnokok-vacsoraja/",
  },
  {
    title: "A NEXON segítségével újabb szintet léptünk",
    date: "2026. március 13.",
    text: "A több mint másfél évtizede névadó szponzor NEXON Kft. egy 9 személyes Ford Transittal segíti az ovi-suli programot és az utánpótlás-versenyzők utazását.",
    image: "/img/news/nexon-busz.jpg",
    url: "https://dunakesziteniszklub.hu/2026/03/a-nexon-segitsegevel-ujabb-szintet-leptunk/",
  },
  {
    title: "Teljesítménydiagnosztika a tenisz szolgálatában",
    date: "2026. február 25.",
    text: "Korosztályos versenyzőink felkészülését Dr. Kovács Péter és az Edzéskontroll Kft. csapata is segíti: a mérésekből készült javaslatok edzőink munkáját teszik hatékonyabbá.",
    image: "/img/news/diagnosztika.jpg",
    url: "https://dunakesziteniszklub.hu/2026/02/teljesitmenydiagnosztika-a-tenisz-szolgalataban/",
  },
  {
    title: "Irány Amerika!",
    date: "2026. január 26.",
    text: "Milyen tenisztudással lehet bekapcsolódni az amerikai ösztöndíjprogramokba? Bogyó Tamás szerint nemcsak a topjátékosok számára lehet jó lehetőség.",
    image: "/img/news/amerika.jpg",
    url: "https://dunakesziteniszklub.hu/2026/01/irany-amerika/",
  },
];

export const PARTNERS = [
  { name: "NEXON", logo: "/img/partners/nexon.png", w: 150 },
  { name: "Magyar Tenisz Szövetség", logo: "/img/partners/mtsz.png", w: 104 },
  { name: "Dunakeszi Város", logo: "/img/partners/dunakeszi.png", w: 70 },
  { name: "BioTechUSA", logo: "/img/partners/biotechusa.png", w: 150 },
  { name: "Greenplan", logo: "/img/partners/greenplan.png", w: 150 },
  { name: "Szóza Plusz", logo: "/img/partners/szoza.png", w: 112 },
  { name: "Serczli", logo: "/img/partners/serczli.png", w: 120 },
  { name: "BeeCorp Studio", logo: "/img/partners/beecorp.png", w: 140 },
];

export const PARTNER_BENEFITS = [
  "Molinó kihelyezése a pályák mellett",
  "Listázás a szponzori oldalon és a szponzorfalon",
  "Meghívás a klub rendezvényeire",
  "Logó a közösségi médiában",
  "Névadási jog egy eseményhez, kiállítóhellyel",
  "Szponzori név az edzői stáb ruházatán",
  "Pályafoglalás heti 1 órában",
  "Csoportos teniszoktatás: 4 fő, 5 alkalom",
  "Félnapos „Roland Garros-élmény”: céges házi verseny",
];

export const NAV = [
  { href: "/programok", label: "Programok" },
  { href: "/ovi-suli", label: "Ovi-suli" },
  { href: "/palyak", label: "Pályák" },
  { href: "/edzok", label: "Edzőink" },
  { href: "/klub", label: "A klub" },
  { href: "/hirek", label: "Hírek" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];
