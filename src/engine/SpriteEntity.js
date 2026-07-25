import { Entity } from "./Entity.js";

export class SpriteEntity extends Entity{
    constructor(options = {}){
        super(options);

        this.color = options.color ?? "rgba(0, 255, 0, 1)";
    }
}