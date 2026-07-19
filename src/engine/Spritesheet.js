import { Sprite } from "./Sprite.js";

export class Spritesheet {
  constructor(options = {}) {
    this.img = new Image();
    this.img.src = options.path ?? "";
    this.metaData = options.metaData ?? {};
    this.loaded = false;

    this.img.onload = () => {
      this.loaded = true;
    };
  }

  getTile(path) {
    const entry = this.#lookup(path);
    if (!entry || entry.x == null || entry.y == null) {
      throw new Error(`retrieving Meta Data: missing tile: ${path}`);
    }

    const [tw, th] = this.metaData.cellSize ?? [32, 32];
    return new Sprite({
      sheet: this.img,
      sx: entry.x,
      sy: entry.y,
      sw: tw,
      sh: th,
    });
  }

  #lookup(path) {
    return String(path)
      .split(".")
      .reduce(
        (node, key) => (node == null ? undefined : node[key]),
        this.metaData,
      );
  }
}
