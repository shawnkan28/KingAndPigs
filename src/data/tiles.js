// All tile is 32 x 32
// https://pixelfrog-assets.itch.io/kings-and-pigs
export const TILE_DATA = {
  cellSize: [32, 32],
  outerCornerWalls: {
    botRight: { x: 32, y: 32 }, // spritesheet topLeft
    botMid: { x: 64, y: 32 }, // spritesheet TopMid
    botLeft: { x: 96, y: 32 }, // spritesheet TopRight
    midRight: { x: 32, y: 64 }, // spritesheet midLeft
    midMid: { x: 64, y: 64 }, // spritesheet midMid
    midLeft: { x: 96, y: 64 }, // spritesheet midRight
    topRight: { x: 32, y: 96 }, // spritesheet botLeft
    topMid: { x: 64, y: 96 }, // spritesheet botMid
    topLeft: { x: 96, y: 96 }, // spritesheet botRight
  },
  outerVertProtrudes: {
    bot: { x: 160, y: 32 }, // spritesheet for platform from outer wall shown on top
    mid: { x: 160, y: 64 }, // spritesheet for platform from outer wall
    top: { x: 160, y: 96 }, // spritesheet for platform from outer wall shown below
  },
  outerHorizProtrudes: {
    left: { x: 32, y: 160 },
    mid: { x: 64, y: 160 },
    right: { x: 96, y: 160 },
  },
  outerAllProtrude: {
    mid: { x: 160, y: 160 },
  },
  outerEdgeWalls: {
    // For the edge of the walls
    topRight: { x: 224, y: 32 },
    topLeft: { x: 256, y: 32 },
    botRight: { x: 224, y: 64 },
    botLeft: { x: 256, y: 64 },
  },
  innerWalls: {
    topLeft: { x: 32, y: 224 },
    topMid: { x: 64, y: 224 },
    topRight: { x: 96, y: 224 },
    midLeft: { x: 32, y: 256 },
    midMid: { x: 64, y: 256 },
    midRight: { x: 96, y: 256 },
    botLeft: { x: 32, y: 288 },
    botMid: { x: 64, y: 288 },
    botRight: { x: 96, y: 288 },
  },
  decorations: {
    window: { x: 64, y: 64 }
  },
  objects: {
    box: { x: 64, y: 64 }
  }
};