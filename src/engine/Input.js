export class Input {
    constructor(target = window){
        this.target = target;
        this.keys = new Set();
        this.keysPressed = new Set();
        this.keysReleased = new Set();
        
        target.addEventListener("keydown", this.#onKeyDown.bind(this));
        target.addEventListener("keyup", this.#onKeyUp.bind(this));
    }

    // Check if button was held
    isKeyDown(code) {
        return this.keys.has(code);
    }

    // Check if button was clicked
    isKeyPressed(code){
        return this.keysPressed.has(code);
    }

    update(){
        this.keysPressed.clear();
        this.keysReleased.clear();
    }

    destroy(){
        this.target.removeEventListener("keydown", this.#onKeyDown);
        this.target.removeEventListener("keyup", this.#onKeyUp);
    }

    #onKeyDown(event){
        if(this.keys.has(event.code)) return ;
        this.keys.add(event.code);
        this.keysPressed.add(event.code);
    }

    #onKeyUp(event){
        this.keys.delete(event.code);
        this.keysReleased.add(event.code);
    }

}