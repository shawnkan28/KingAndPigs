// Level 2 — L-shaped room, 18 x 10 cells (576x320 @ 32px)
// Paths match TILEDATA keys (SprVesheet.getTile).
// Purple void uses outerCornerWalls.midMid (solid #3F3851 tile).
// Window / door / box are placeholders until you add them to metadata.
// Pig is an entVy spawn, not a tile — see SPAWNS below.

const V = "outerCornerWalls.midMid"; // void / purple fill
// const VL = "innerWalls.topLeft";
// const V = "innerWalls.topMid";
// const VR = "innerWalls.topRight";
// const IL = "innerWalls.midLeft";
// const IM = "innerWalls.midMid";
// const IR = "innerWalls.midRight";
// const IBL = "innerWalls.botLeft";
// const IB = "innerWalls.botMid";
// const IBR = "innerWalls.botRight";
// const FL = "outerHorizProtrudes.left"; // tan platform
// const FT = "outerHorizProtrudes.mid";
// const FR = "outerHorizProtrudes.right";
// const FV = "outerVertProtrudes.mid"; // tan vertical step
// const W = "decorations.window"; // TODO: add to metadata
// const D = "objects.door"; // TODO: add to metadata
// const B = "objects.box"; // TODO: add to metadata

// prettier-ignore
export const LEVEL_1 = [
  // 0 - 10 cols
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 1 —
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 2 — 
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 3 — 
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 4
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 5 — 
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 6 — 
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 7 —
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 8 —
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 9 — void
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
];