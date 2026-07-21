// Level 1 background — 32 x 18 cells (1024x576 @ 32px)
// Paths match TILEDATA keys (Spritesheet.getTile).
// Purple void uses outerCornerWalls.midMid (solid #3F3851 tile).
// Windows / crates are not in TILEDATA yet — placeholders until you add them.

const V = "outerCornerWalls.midMid"; // void / purple fill
const ITL = "innerWalls.topLeft";
const IT = "innerWalls.topMid";
const ITR = "innerWalls.topRight";
const IL = "innerWalls.midLeft";
const IM = "innerWalls.midMid";
const IR = "innerWalls.midRight";
const IBL = "innerWalls.botLeft";
const IB = "innerWalls.botMid";
const IBR = "innerWalls.botRight";
const FL = "outerHorizProtrudes.left"; // tan platform
const FT = "outerHorizProtrudes.mid";
const FR = "outerHorizProtrudes.right";
const W = "decorations.window"; // TODO: add to metadata
const B = "objects.box"; // TODO: add to metadata

// prettier-ignore
export const LEVEL_1 = [
  // 0
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 1
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 2
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 3
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 4
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 5 — top outer brick
  [V,V,V,ITL,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,IT,ITR,V,V,V,V],
  // 6 — outer brick + ceiling tan trim
  [V,V,V,IL,IM,FL,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FR,IR,V,V,V,V],
  // 7 — wall + 5 windows
  [V,V,V,IL,IM,IM,IM,W,W,IM,IM,IM,W,W,IM,IM,IM,W,W,IM,IM,IM,W,W,IM,IM,IM,IR,V,V,V,V],
  // 8
  [V,V,V,IL,IM,IM,IM,W,W,IM,IM,IM,W,W,IM,IM,IM,W,W,IM,IM,IM,W,W,IM,IM,IM,IR,V,V,V,V],
  // 9
  [V,V,V,IL,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IR,V,V,V,V],
  // 10 — stacked crate on left
  [V,V,V,IL,IM,IM,B,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IM,IR,V,V,V,V],
  // 11 — tan floor + two crates
  [V,V,V,IL,IM,FL,B,B,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FT,FR,IR,V,V,V,V],
  // 12 — bottom outer brick
  [V,V,V,IBL,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IB,IBR,V,V,V,V],
  // 13
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 14
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 15
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 16
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
  // 17
  [V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V,V],
];
