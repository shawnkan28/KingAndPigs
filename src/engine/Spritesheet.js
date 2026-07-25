import { Sprite } from "./Sprite.js";

export class Spritesheet {
  constructor(options = {}) {
    this.img = new Image();
    this.img.src = options.path ?? "";
    this.frameData = options.frameData ?? {};
    this.loaded = false;
    this.cellSize = options.cellSize ?? [0, 0];
    this.img.onload = () => {
      this.loaded = true;
    };
  }

  getFrame(action, index = 0){
    return new Sprite({
      sheet: this.img,
      sx: this.frameData[index].x,
      sy: this.frameData[index].y,
      sw: this.frameData[index].w,
      sh: this.frameData[index].h,
      ax: this.frameData[index]["anchor"].x,
      ay: this.frameData[index]['anchor'].y
    });
  }

  getTile(path) {
    let entry = this.#lookupTile(path);
    if (!entry || entry.x == null || entry.y == null) {
      // throw new Error(`retrieving Meta Data: missing tile: ${path}`);
      entry = this.#lookupTile("1.1.5");
    }

    const [tw, th] = this.cellSize;
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
        this.frameData,
      );
  }
}
