import { Entity } from "./Entity.js";
import { Spritesheet } from "./Spritesheet.js";

export class SpriteEntity extends Entity {
  constructor(options = {}) {
    super(options);

    this.metaData = options.metaData ?? {};
    this.color = options.color ?? "rgba(0, 255, 0, 1)";
    this.frame = options.frame ?? 0;
    this.action = options.action ?? "idle";
    this.spriteSheets = {};
    this.frameTime = 0; // will be used to count total Time. used together with frameDuration to compute fps.
    this.isFlip = options.isFlip ?? false;
    this.frameDuration = 1 / this.metaData[this.action]["fps"] ?? 0.1;
    this.prevCollisionBounds = { x: 0, y: 0, w: 0, h: 0 };

    this.#generateSpritesheets();
    this.#updateMetaData();
  }

  getCollisionBounds() {
    return {
      x: this.x + this.hitbox.x,
      y: this.y + this.hitbox.y,
      w: this.hitbox.w,
      h: this.hitbox.h,
    };
  }

  drawHitbox(screen) {
    // Draw Hitbox
    screen.fillStyle = this.color;
    screen.fillRect(
      this.x + this.hitbox.x,
      this.y + this.hitbox.y,
      this.hitbox.w,
      this.hitbox.h,
    );

    const ax = this.x + this.ax;
    const ay = this.y + this.ay;
    // Draw Anchor
    screen.strokeStyle = "magenta";
    screen.lineWidth = 1;
    // Horizontal Line
    screen.beginPath();
    screen.moveTo(ax - 4, ay);
    screen.lineTo(ax + 4, ay);
    screen.stroke();
    // Vertical Line
    screen.beginPath();
    screen.moveTo(ax, ay - 4);
    screen.lineTo(ax, ay + 4);
    screen.stroke();
  }

  setAction(action) {
    if (this.action === action) return;

    this.action = action;
    this.frame = 0;
    this.#updateMetaData();
  }

  // Update purely animation. Not updating the x/y coordinates
  updateAnimation(dt) {
    this.frameTime += dt;
    this.prevCollisionBounds = this.getCollisionBounds();
    while (this.frameTime >= this.frameDuration) {
      this.frameTime -= this.frameDuration;
      if (
        !this.metaData[this.action].loop &&
        this.frame === this.totalFrames - 1
      ) {
        this.frame = this.totalFrames - 1;
      } else {
        this.frame = (this.frame + 1) % this.totalFrames;
      }
      this.#updateMetaData();
    }
  }

  render(screen) {
    if (!this.spriteSheets[this.action].loaded) return;
    const sprite = this.spriteSheets[this.action].getFrame(
      this.action,
      this.frame,
    );

    screen.save();
    // this fix the issue of differentr sprite centering for different spritesheet.
    if (this.isFlip) {
      screen.translate(this.x + this.ax, this.y);
      screen.scale(-1, 1);
      screen.drawImage(
        sprite.sheet,
        sprite.sx,
        sprite.sy,
        sprite.sw,
        sprite.sh,
        // when flipX is used, it runs the translate which is from origin so this is not required anymore.
        -this.ax,
        0,
        this.w,
        this.h,
      );
    } else {
      screen.drawImage(
        sprite.sheet,
        sprite.sx,
        sprite.sy,
        sprite.sw,
        sprite.sh,
        this.x,
        this.y,
        this.w,
        this.h,
      );
    }

    screen.restore();
  }

  #updateMetaData() {
    this.w = this.metaData[this.action]["frames"][this.frame].w;
    this.h = this.metaData[this.action]["frames"][this.frame].h;
    this.hitbox = this.metaData[this.action]["frames"][this.frame].hitbox;
    this.ax = this.metaData[this.action]["frames"][this.frame].anchor.x;
    this.ay = this.metaData[this.action]["frames"][this.frame].anchor.y;
    this.totalFrames = this.metaData[this.action]["frames"].length; // when action change need to get new frame

    const prev = this.prevCollisionBounds;
    if (prev.x === 0) return;
    const next = this.getCollisionBounds();
    // used to compansate since the hitbox height and width might change.
    // so to prevent collision from detecting the growth, we need to compansate.
    this.y += prev.y + prev.h - (next.y + next.h);
    this.x += prev.x - next.x;
  }

  #generateSpritesheets() {
    for (const [key, data] of Object.entries(this.metaData)) {
      this.spriteSheets[key] = new Spritesheet({
        path: data["path"],
        frameData: data["frames"],
        cellSize: data["frameSize"],
      });
    }
  }
}
