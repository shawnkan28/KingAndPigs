// Level 2 — L-shaped room, 18 x 10 cells (576x320 @ 32px)
// Paths match TILEDATA keys (Spritesheet.getTile).
// Purple void uses outerCornerWalls.midMid (solid #3F3851 tile).
// Window / door / box are placeholders until you add them to metadata.
// Pig is an entity spawn, not a tile — see SPAWNS below.

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
const FV = "outerVertProtrudes.mid"; // tan vertical step
const W = "decorations.window"; // TODO: add to metadata
const D = "objects.door"; // TODO: add to metadata
const B = "objects.box"; // TODO: add to metadata

// prettier-ignore
export const LEVEL_2 = [
  // 0 — top jagged / void
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 1 — top outer brick
  [V,  V,  ITL,IT, IT, IT, IT, IT, IT, IT, IT, IT, IT, IT, ITR,V,  V,  V],
  // 2 — sides + tan ceiling
  [V,  V,  IL, IM, FL, FT, FT, FT, FT, FT, FT, FT, FT, FR, IR, V,  V,  V],
  // 3 — window (left) + door top (right)
  [V,  V,  IL, IM, IM, W,  W,  IM, IM, IM, IM, D,  D,  IM, IR, V,  V,  V],
  // 4
  [V,  V,  IL, IM, IM, W,  W,  IM, IM, IM, IM, D,  D,  IM, IR, V,  V,  V],
  // 5 — crate on raised floor; door continues
  [V,  V,  IL, IM, IM, IM, IM, IM, IM, IM, B,  D,  D,  IM, IR, V,  V,  V],
  // 6 — lower-left open wall; raised tan floor on right; brick under overhang
  [V,  V,  IL, IM, IM, IM, IM, FV, FL, FT, FT, FT, FR, IB, IBR,V,  V,  V],
  // 7 — lower pit floor (left); void under raised section (right)
  [V,  V,  IL, IM, FL, FT, FR, IB, IBR,V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 8 — bottom outer brick of pit
  [V,  V,  IBL,IB, IB, IB, IB, IBR,V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 9 — void
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
];

// Non-tile objects to spawn on top of the map (col, row in cells)
export const LEVEL_2_SPAWNS = [
  { type: "pig", col: 12, row: 5 }, // stands on raised floor by the door
];
