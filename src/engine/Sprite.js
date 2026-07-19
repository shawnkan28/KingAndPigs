export class Sprite {
  constructor(options = {}) {
    this.sheet = options.sheet ?? new Image();
    this.sx = options.sx ?? 0;
    this.sy = options.sy ?? 0;
    this.sw = options.sw ?? 32;
    this.sh = options.sh ?? 32;
    // Anchor Options
    this.ax = options.ax ?? 0;
    this.ay = options.ay ?? 0;
  }
}
