// Level 2 — L-shaped room, 18 x 10 cells (576x320 @ 32px)
// Paths match TILEDATA keys (SprVesheet.getTile).
// Purple void uses outerCornerWalls.midMid (solid #3F3851 tile).
// Window / door / box are placeholders until you add them to metadata.
// Pig is an entVy spawn, not a tile — see SPAWNS below.

const o = "1.1.5"; // void / purple fill
const i = "3.1.5";
const OW = ["1.1.8", "1.1.2", "1.1.6", "1.1.4"]; // Outer walls [Top, Bottom, Left, Right]
const OWC = ["1.3.1", "1.3.2", "1.3.3", "1.3.4"]; // Outer wall Corner [top left, top right, bottom left, bottom right]
const IW = ["3.1.2", "3.1.8", "3.1.4", "3.1.6"]; // inner wall [top, bottom, left, right]
const IWC = ["3.1.1", "3.1.3", "3.1.7", "3.1.9"]; // inner wall [top-left, top-right, bot-left, bot-right]

// prettier-ignore
export const LEVEL_1 = [
  // 0 - 10 cols
  [o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o],
  // 1 —
  [o,  OWC[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OW[0],  OWC[1],  o],
  // 2 — 
  [o,  OW[2],  IWC[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IW[0],  IWC[1],  OW[3],  o],
  // 3 — 
  [o,  OW[2],  IW[2],  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  IW[3],  OW[3], o],
  // 4
  [o,  OW[2],  IW[2],  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  IW[3],  OW[3], o],
  // 5 — platform layer 
  [o,  OW[2],  IW[2],  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  IW[3],  OW[3], o],
  // 6 — 
  [o,  OW[2],  IW[2],  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  i,  IW[3],  OW[3], o],
  // 7 —
  [o,  OW[2],  IWC[2],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IW[1],  IWC[3],  OW[3], o],
  // 8 —
  [o,  OWC[2],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OW[1],  OWC[3],  o],
  // 9 — void
  [o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o,  o],
];
