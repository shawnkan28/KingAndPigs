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
    let entry = this.#lookupTile(path);
    if (!entry || entry.x == null || entry.y == null) {
      // throw new Error(`retrieving Meta Data: missing tile: ${path}`);
      entry = this.#lookupTile("1.1.5");
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
  isSolidTile(path){
    return this.#lookupTile(path)?.isSolid === true;
  }

  #lookupTile(path) {
    return String(path)
      .split(".")
      .reduce(
        (node, key) => (node == null ? undefined : node[key]),
        this.metaData,
      );
  }
}
