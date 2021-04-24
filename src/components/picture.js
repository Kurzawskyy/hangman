import { FAIL } from "../consts/main";
import { GameOver } from "./game-over";

export class Picture {
    constructor() {
        this.changeImgSrc = this.changeImgSrc.bind(this);
        this.counter = 0;
        this.img = document.getElementById("picture");
        this.sentenceDisplay = document.getElementById("sentence-display");
        this.sentenceDisplay.classList.add("sentence-display");
    }

    changeImgSrc() {
        this.counter = this.counter + 1;
        if(this.counter < 10) {
            this.img.src = `img/s${this.counter}.jpg`;
        } else {
            new GameOver(FAIL);
            this.sentenceDisplay.classList.add("colored-red");
        }    
    }
}
