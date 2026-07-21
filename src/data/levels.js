// Level 2 — L-shaped room, 18 x 10 cells (576x320 @ 32px)
// Paths match TILEDATA keys (SprVesheet.getTile).
// Purple void uses outerCornerWalls.midMid (solid #3F3851 tile).
// Window / door / box are placeholders until you add them to metadata.
// Pig is an entVy spawn, not a tile — see SPAWNS below.

const V = "outerCornerWalls.midMid"; // void / purple fill
const OW = ["outerCornerWalls.topMid", "outerCornerWalls.botMid", 
            "outerCornerWalls.midLeft", "outerCornerWalls.midRight"]; // outer wall
const OC = ["outerEdgeWalls.topRight", "outerEdgeWalls.topLeft", 
            "outerEdgeWalls.botRight", "outerEdgeWalls.botLeft"]; // Outer corner wall
const IC = ["outerCornerWalls.topLeft", "outerCornerWalls.topRight", 
            "outerCornerWalls.botLeft", "outerCornerWalls.botRight"]; // Inner corner;
const IW = ["innerWalls.topLeft", "innerWalls.topMid", "innerWalls.topRight",
            "innerWalls.midLeft", "innerWalls.midMid", "innerWalls.midRight",
            "innerWalls.botLeft", "innerWalls.botMid", "innerWalls.botRight"];

// prettier-ignore
export const LEVEL_1 = [
  // 0 - 10 cols
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 1 —
  [V,  V,  OC[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OC[1],  V],
  // 2 — 
  [V,  V,  OW[2],  IW[0],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[2],  OW[3],  V],
  // 3 — 
  [V,  V,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[5],  OW[3],  V],
  // 4
  [V,  V,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[5],  OW[3],  V],
  // 5 — 
  [V,  V,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  V,  IW[7],  IW[7],  IW[7],  IW[7],  IW[7],  IW[7],  IW[7],  IW[8],  OW[3],  V],
  // 6 — 
  [V,  V,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  IW[5],  IC[3],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OC[3],  V],
  // 7 —
  [V,  V,  OW[2],  IW[6],  IW[7],  IW[7],  IW[7],  IW[8],  OW[3],  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 8 —
  [V,  V,  OC[2],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OC[3],  V,  V,  V,  V,  V,  V,  V,  V,  V],
  // 9 — void
  [V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V,  V],
];