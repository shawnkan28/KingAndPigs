import { Spritesheet } from "./Spritesheet.js";

/**
 * Core responsibilities
 * one instance of TileMap contains one map. so if you have multiple maps there should be multiple instances.
 * Hold the map — 2D array (or flat array) of tile ids/paths, plus width/height in cells
 * Know the sheet — reference to the terrain Spritesheet
 * Render — for each non-empty cell, getTile(id) and drawImage at col * tileW, row * tileH
 * Optional helpers — get(col, row), set(col, row, id), isSolid(col, row) when you add collision
 * 
 * THIS MIGHT BE CONSUMING TOO MUCH RESOURCES!
 */

export class TileMap {
  constructor(options = {}) {
    this.path = options.path ?? "";
    this.metaData = options.metaData ?? {};
    this.mapData = options.mapData ?? {};
    this.showBox = options.showBox ?? false;
    this.spriteSheet = new Spritesheet({
      path: this.path,
      metaData: this.metaData,
    });
  }

  render(screen) {
    if (!this.spriteSheet.loaded) return;

    const mapSheet = this.#drawMap();

    let rowNo = 0;
    mapSheet.forEach((row) => {
      let colNo = 0;
      row.forEach((sprite) => {
        const x = sprite.sw * colNo;
        const y = sprite.sh * rowNo;
        this.#drawImg(screen, sprite, x, y);
        colNo++;
      });
      rowNo++;
    });

    // let colNo = 0;
    // mapSheet[0].forEach((sprite) => {
    //     const x = sprite.sw * colNo;

    //     colNo++;
    // })
    // mapSheet.forEach((row) => {
    //   let colNo = 0;
    //   row.forEach((sprite) => {
    //     const x = sprite.sw * colNo;
    //     const y = sprite.sy * rowNo;
    //     this.#drawImg(screen, sprite, x, y);
    //     colNo++;
    //   });
    //   rowNo++;
    // });
  }

  #drawMap() {
    return this.mapData.map((row) => {
      return row.map((c) => {
        return this.spriteSheet.getTile(c);
      });
    });
  }

  #drawImg(screen, sprite, x, y) {
    if (this.showBox) {
      screen.fillStyle = "rgba(255,0,0,0.5)";
      screen.fillRect(x, y, sprite.sw, sprite.sh);
    }

    screen.drawImage(
      sprite.sheet,
      sprite.sx,
      sprite.sy,
      sprite.sw,
      sprite.sh,
      x,
      y,
      sprite.sw,
      sprite.sh,
    );
  }
}
