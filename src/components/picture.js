import { FAIL } from "../consts/main";
import { GameOver } from "./game-over";

export class Picture {
    constructor() {
        this.changeImgSrc = this.changeImgSrc.bind(this);
        this.counter = 0;
        this.img = document.getElementById("picture");
    }

    changeImgSrc() {
        this.counter = this.counter + 1;
        if(this.counter < 10) {
            this.img.src = `img/s${this.counter}.jpg`;
        } else {
            new GameOver(FAIL);
        }    
    }
}
