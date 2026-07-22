// All tile is 32 x 32
// https://pixelfrog-assets.itch.io/kings-and-pigs
export const TILE_DATA = {
  cellSize: [32, 32],
  1: {
    1: {
      desc: "row 1, first set of tiles",
      1: { x: 32, y: 32 }, // spritesheet topLeft
      2: { x: 64, y: 32 }, // spritesheet TopMid
      3: { x: 96, y: 32 }, // spritesheet TopRight
      4: { x: 32, y: 64 }, // spritesheet midLeft
      5: { x: 64, y: 64 }, // spritesheet midMid
      6: { x: 96, y: 64 }, // spritesheet midRight
      7: { x: 32, y: 96 }, // spritesheet botLeft
      8: { x: 64, y: 96 }, // spritesheet botMid
      9: { x: 96, y: 96 }, // spritesheet botRight
    },
    2: {
      desc: "row 1, second set of tiles",
      1: { x: 160, y: 32 }, // top wall
      2: { x: 160, y: 64 }, // mid wall
      3: { x: 160, y: 96 }, // bottom wall
    },
    3: {
      desc: "row 1, third set of tiles",
      1: { x: 224, y: 32 },
      2: { x: 256, y: 32 },
      3: { x: 224, y: 64 },
      4: { x: 256, y: 64 },
    },
    4: {
      desc: "row 1, forth set of tiles",
      1: { x: 320, y: 32 },
      2: { x: 352, y: 32 },
      3: { x: 320, y: 64 },
      4: { x: 352, y: 64 },
    },
    5: {
      desc: "row 1, fifth set of tiles",
      1: { x: 416, y: 32 },
      2: { x: 448, y: 32 },
      3: { x: 416, y: 64 },
      4: { x: 448, y: 64 },
    },
    6: {
      desc: "row 1, last set of tiles",
      1: { x: 512, y: 32 },
      2: { x: 512, y: 64 },
      3: { x: 544, y: 64 },
    },
  },
  2: {
    1: {
      desc: "row 2, first set of tiles",
      1: { x: 32, y: 160 },
      2: { x: 64, y: 160 },
      3: { x: 96, y: 160 },
    },
    2: {
      desc: "row 2, second set of tiles",
      1: { x: 160, y: 160 },
    },
    3: {
      desc: "row 2, third set of tiles",
      1: { x: 224, y: 128 },
      2: { x: 256, y: 128 },
      3: { x: 224, y: 160 },
      4: { x: 256, y: 160 },
    },
    4: {
      desc: "row 2, forth set of tiles",
      1: { x: 320, y: 128 },
      2: { x: 352, y: 128 },
      3: { x: 320, y: 160 },
      4: { x: 352, y: 160 },
    },
    5: {
      desc: "row 2, fifth set of tiles",
      1: { x: 416, y: 128 },
      2: { x: 448, y: 128 },
      3: { x: 416, y: 160 },
      4: { x: 448, y: 160 },
    },
    6: {
      desc: "row 2, last set of tiles",
      1: { x: 512, y: 128 },
      2: { x: 544, y: 128 },
      3: { x: 512, y: 160 },
      4: { x: 544, y: 160 },
    },
  },
  3: {
    1: {
      desc: "row 3, first set of tiles",
      1: { x: 32, y: 224 },
      2: { x: 64, y: 224 },
      3: { x: 96, y: 224 },
      4: { x: 32, y: 256 },
      5: { x: 64, y: 256 },
      6: { x: 96, y: 256 },
      7: { x: 32, y: 288 },
      8: { x: 64, y: 288 },
      9: { x: 96, y: 288 },
    },
    2: {
      desc: "row 3, second set of tiles.",
      1: { x: 160, y: 224 },
      2: { x: 160, y: 256 },
      3: { x: 160, y: 288 },
    },
    3: {
      desc: "row 3, third set of tiles",
      1: { x: 224, y: 224 },
      2: { x: 256, y: 224 },
      3: { x: 224, y: 256 },
      4: { x: 256, y: 256 },
    },
    4: {
      desc: "row 3, forth set of tiles",
      1: { x: 320, y: 224 },
      2: { x: 352, y: 224 },
      3: { x: 320, y: 356 },
      4: { x: 352, y: 256 },
    },
    5: {
      desc: "row 3, fifth set of tiles",
      1: { x: 416, y: 224 },
      2: { x: 448, y: 224 },
      3: { x: 416, y: 256 },
      4: { x: 448, y: 256 },
    },
    6: {
      desc: "row 3, last set of tiles",
      1: { x: 512, y: 224 },
      2: { x: 512, y: 256 },
      3: { x: 544, y: 356 },
    },
  },
  4: {
    1: {
      desc: "last row, first set of tiles",
      1: { x: 32, y: 352 },
      2: { x: 64, y: 352 },
      3: { x: 96, y: 352 },
    },
    2: {
      desc: "last row, second set of tiles",
      1: { x: 160, y: 352 },
    },
    3: {
      desc: "last row, third set of tiles",
      1: { x: 224, y: 320 },
      2: { x: 256, y: 320 },
      3: { x: 224, y: 352 },
      4: { x: 256, y: 352 },
    },
    4: {
      desc: "last row, forth set of tiles",
      1: { x: 320, y: 320 },
      2: { x: 352, y: 320 },
      3: { x: 320, y: 352 },
      4: { x: 352, y: 352 },
    },
    5: {
      desc: "last row, fifth set of tiles",
      1: { x: 416, y: 320 },
      2: { x: 448, y: 320 },
      3: { x: 416, y: 352 },
      4: { x: 448, y: 352 },
    },
    6: {
      desc: "last row, last set of tiles",
      1: { x: 512, y: 320 },
      2: { x: 544, y: 320 },
      3: { x: 512, y: 352 },
      4: { x: 544, y: 352 },
    },
  },

  decorations: {
    window: { x: 64, y: 64 },
  },
  objects: {
    box: { x: 64, y: 64 },
  },
};
