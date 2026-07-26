import { SpriteEntity } from "./SpriteEntity.js";
import { applyGravity, JUMP_SPEED } from "./Physics.js";
import { moveAndCollide } from "./Collision.js";

export class Player extends SpriteEntity {
  constructor(options = {}) {
    super(options);

    if (!options.input) throw new Error("Player requires input options.");
    if (!options.map) throw new Error("Player requires map options.");
    this.input = options.input;
    this.map = options.map;
    this.vel = options.vel ?? 100;
    this.onGround = options.onGround ?? false;
    this.jumpSpeed = options.jumpSpeed ?? JUMP_SPEED;
    this.showHitbox = options.showHitbox ?? false;
    this.color = options.color ?? "rgba(0,255,0, 0.5)";
  }

  update(dt) {
    applyGravity(this, dt);

    this.#applyInput();

    const moving = this.vx !== 0;
    this.isFlip = this.vx < 0;
    this.setAction(moving ? "run" : "idle");

    // The moveAndCollide already performs the update for the x/y axis so no need to run super.update();
    const { hitGround } = moveAndCollide(this, dt, this.map.getCollisionMap());
    this.onGround = hitGround;

    super.updateAnimation(dt);
  }

  render(screen){
    super.render(screen);
    if(this.showHitbox) super.drawHitbox(screen);
  }

  #applyInput(){
    this.vx = 0;
    
    // JUMP
    const jumpPressed = this.input.isKeyPressed("Space");
    if(jumpPressed && this.onGround){
      this.vy = this.jumpSpeed;
      this.onGround = false;
    }

    if(this.input.isKeyDown("ArrowLeft") || this.input.isKeyDown("KeyA")) this.vx = -this.vel;
    if(this.input.isKeyDown("ArrowRight") || this.input.isKeyDown("KeyD")) this.vx = this.vel;
  }
}
