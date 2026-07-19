export class Entity {
  constructor(options = {}) {
    this.x = options.x ?? 0;
    this.y = options.y ?? 0;
    this.w = options.w ?? 32;
    this.h = options.h ?? 32;
    this.vx = options.vx ?? 0;
    this.vy = options.vy ?? 0;

    this.color = options.color ?? "rgba(255,0,0,0.5)";
  }

  update(dt) {
    // this is basically computing distance = speed * time. shows the number of pixels move according to time.
    // this is to prevent the different screen refresh rate from affecting the distance travelled.
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  render(screen) {
    screen.fillStyle = this.color;
    screen.fillRect(this.x, this.y, this.w, this.h);
  }
}
