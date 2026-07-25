// King Human sprites — Pixel Frog "Kings and Pigs"
// Source: src/assets/King Human/*.png
// Aseprite: src/assets/aseprite/02-KingHuman.aseprite (96x96 canvas, tags @ 100ms)

export const KING_HUMAN = {
  frameSize: [78, 58],
  frameDuration: 100, // ms (10 FPS)
  basePath: "./src/assets/King Human",

  animations: {
    idle: {
      file: "Idle (78x58).png",
      loop: true,
      // hitbox = body only (excludes hammer), relative to frame top-left
      // anchor = feet center (stable at y:44 across idle bob)
      frames: [
        { x: 0,   y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
        { x: 78,  y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
        { x: 156, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
        { x: 234, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
        { x: 312, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
        { x: 390, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
        { x: 468, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 17, width: 22, height: 27 }, anchor: { x: 35, y: 44 } },
        { x: 546, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 16, width: 22, height: 28 }, anchor: { x: 35, y: 44 } },
        { x: 624, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 16, width: 22, height: 28 }, anchor: { x: 35, y: 44 } },
        { x: 702, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 17, width: 22, height: 27 }, anchor: { x: 35, y: 44 } },
        { x: 780, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 26 }, anchor: { x: 35, y: 44 } },
      ],
    },
    run: {
      file: "Run (78x58).png",
      loop: true,
      // hitbox = body only (excludes hammer), relative to frame top-left
      // anchor = feet center (varies slightly with run stride)
      frames: [
        { x: 0,   y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 24 }, anchor: { x: 35, y: 42 } },
        { x: 78,  y: 0, width: 78, height: 58, hitbox: { x: 24, y: 16, width: 22, height: 25 }, anchor: { x: 35, y: 41 } },
        { x: 156, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 17, width: 22, height: 25 }, anchor: { x: 35, y: 42 } },
        { x: 234, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 20, width: 22, height: 24 }, anchor: { x: 35, y: 44 } },
        { x: 312, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 18, width: 22, height: 25 }, anchor: { x: 35, y: 43 } },
        { x: 390, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 16, width: 22, height: 26 }, anchor: { x: 35, y: 42 } },
        { x: 468, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 17, width: 22, height: 26 }, anchor: { x: 35, y: 43 } },
        { x: 546, y: 0, width: 78, height: 58, hitbox: { x: 24, y: 20, width: 22, height: 24 }, anchor: { x: 35, y: 44 } },
      ],
    },
    jump: {
      file: "Jump (78x58).png",
      frames: 1,
      loop: false,
    },
    fall: {
      file: "Fall (78x58).png",
      frames: 1,
      loop: false,
    },
    ground: {
      file: "Ground (78x58).png",
      frames: 1,
      loop: false,
    },
    attack: {
      file: "Attack (78x58).png",
      frames: 3,
      loop: false,
    },
    hit: {
      file: "Hit (78x58).png",
      frames: 2,
      loop: false,
    },
    dead: {
      file: "Dead (78x58).png",
      frames: 4,
      loop: false,
    },
    doorIn: {
      file: "Door In (78x58).png",
      frames: 8,
      loop: false,
    },
    doorOut: {
      file: "Door Out (78x58).png",
      frames: 8,
      loop: false,
    },
  },
};

/**
 * Helper: source rect for frame index on a horizontal strip.
 * frame 0 → { sx: 0, sy: 0, sw: 78, sh: 58 }
 */
export function kingHumanFrameRect(frameIndex, frameSize = KING_HUMAN.frameSize) {
  const [fw, fh] = frameSize;
  return {
    sx: frameIndex * fw,
    sy: 0,
    sw: fw,
    sh: fh,
  };
}
