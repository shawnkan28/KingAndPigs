import { SpriteEntity } from "./SpriteEntity.js";
import { applyGravity } from "./Physics.js";
import { moveAndCollide } from "./Collision.js";

export class Player extends SpriteEntity {
  constructor(options = {}) {
    super(options);

    if (!options.input) throw new Error("Player requires input options.");
    if (!options.map) throw new Error("Player requires map options.");
    this.input = options.input;
    this.map = options.map;
  }

  update(dt) {
    applyGravity(this, dt);

    const { hitGround } = moveAndCollide(this, dt, this.map.getCollisionMap());
    
    super.update(dt);
  }
}
