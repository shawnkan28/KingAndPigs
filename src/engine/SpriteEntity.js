import { Entity } from "./Entity.js";

export class SpriteEntity extends Entity{
    constructor(options = {}){
        super(options);

        this.color = options.color ?? "rgba(0, 255, 0, 1)";
    }

    getCollisionBounds(){
        return {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h
        };
    }
}