// NEXON Dunakeszi's dot-space choreography: what the dots form as you scroll the homepage.
// Arc: starfield → racket (programmes) → court (courts) → 1992, the founding year on the
// club's badge (history) → big spinning ball (results) → black hole (the final call).
// Shapes alternate sides; the section CSS in app/space.css keeps text out of their way.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the racket stands in the right-hand column while the programme list scrolls past on the left
  { anchor: "#programok", shape: "racket", wide: at(0.83, 0.56, 0.1, 0.28), narrow: phone },
  // the court stands on the left; the courts section keeps its content in the right ~68%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.165, 0.6, 0.12, 0.3), narrow: phone },
  // the founding year beside its heading, complete when the heading is mid-screen
  { anchor: "#tortenet-title", done: 0.5, shape: { word: "1992" }, wide: at(0.73, 0.5, 0.2, 0.3), narrow: at(0.5, 0.42, 0.34, 0.2) },
  // large, centred, faint, slowly spinning, behind the results
  { anchor: "#eredmenyek", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// ball (optic yellow), paper, red clay, NEXON teal
export const PALETTE = ["#d6e54a", "#f3efe5", "#e0804f", "#5cc5bf"];
export const FONT_FALLBACK = 'italic 500 230px "Cormorant Garamond", Georgia, serif';
