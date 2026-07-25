import { Entity } from "./Entity.js";
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
    this.color = options.color ?? "rgba(255, 0, 0, 0.5)";
    this.metaData = options.metaData ?? {};
    this.mapData = options.mapData ?? {};
    this.showBox = options.showBox ?? false;
    this.spriteSheet = new Spritesheet({
      path: this.path,
      metaData: this.metaData,
    });
    this.mapSheet = this.#drawMap();
    this.solidMap = this.#setCollisionMap();
  }

  render(screen) {
    if (!this.spriteSheet.loaded) return;

    // const mapSheet = this.#drawMap();

    let rowNo = 0;
    this.mapSheet.forEach((row) => {
      let colNo = 0;
      row.forEach((sprite) => {
        const x = sprite.sw * colNo;
        const y = sprite.sh * rowNo;
        this.#drawImg(screen, sprite, x, y);

        if (this.showBox) {
          // if value is 0 means not solid, else its a solid
          const val = this.solidMap[rowNo][colNo];
          if(val > 0){
            const entity = new Entity({x: x, y: y, w: sprite.sw, h: sprite.sh});
            entity.render(screen);
          }
        }
        colNo++;
      });
      rowNo++;
    });
  }

  getCollisionMap() {
    return this.solidMap;
  }

  #setCollisionMap() {
    const solidMap = [];
    let rowNo = 0;
    this.mapData.forEach((row) => {
      let colNo = 0;
      const solidRow = [];
      row.forEach((val) => {
        const isSolid = this.spriteSheet.isSolidTile(val);
        solidRow.push(isSolid ? 255 : 0);
      });
      solidMap.push(solidRow);
    });
    return solidMap;
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
