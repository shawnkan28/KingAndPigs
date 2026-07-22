// Level 2 — L-shaped room, 18 x 10 cells (576x320 @ 32px)
// Paths match TILEDATA keys (SprVesheet.getTile).
// Purple void uses outerCornerWalls.midMid (solid #3F3851 tile).
// Window / door / box are placeholders until you add them to metadata.
// Pig is an entVy spawn, not a tile — see SPAWNS below.

const v = "1.1.5"; // void / purple fill
const OW = ["1.1.8", "1.1.2", "1.1.6", "1.1.4"] // Outer walls [Top, Bottom, Left, Right]
const OWC = ["1.3.1", "1.3.2", "1.3.3", "1.3.4"] // Outer wall Corner [top left, top right, bottom left, bottom right]
const IW = ["3.1.2", "3.1.8", "3.1.4", "3.1.6"] // inner wall [top, bottom, left, right]

// prettier-ignore
export const LEVEL_1 = [
  // 0 - 10 cols
  [v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v],
  // 1 —
  [v,  v,  OWC[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OWC[1],  v],
  // 2 — 
  [v,  v,  OW[2],  v,  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  v,  OW[3],  v],
  // // 3 — 
  // [v,  v,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[5],  OW[3], v],
  // // 4
  // [v,  v,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[4],  IW[5],  OW[3],  v],
  // // 5 — 
  // [v,  v,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  V,  IW[7],  IW[7],  IW[7],  IW[7],  IW[7],  IW[7],  IW[7],  IW[8],  OW[3],  v],
  // // 6 — 
  // [v,  v,  OW[2],  IW[3],  IW[4],  IW[4],  IW[4],  IW[5],  IC[3],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OC[3],  v],
  // // 7 —
  // [v,  v,  OW[2],  IW[6],  IW[7],  IW[7],  IW[7],  IW[8],  OW[3],  v,  v,  v,  v,  v,  v,  v,  v,  v],
  // // 8 —
  // [v,  v,  OC[2],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OC[3],  v,  v,  v,  v,  v,  v,  v,  v,  v],
  // // 9 — void
  // [v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v,  v],
];