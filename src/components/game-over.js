import { FAIL, SUCCESS } from "../consts/main";
import { startGame } from "../helpers/reset-game";

export class GameOver {
    constructor(type) {
        this.gameOverWrapper = document.getElementById("game-over-wrapper");
        this.gameOverWrapper.classList.remove("is-invisible");
        this.type = type;
        this.keyboardWrapper = document.getElementById("keyboard-wrapper");
        this.keyboardWrapper.classList.add("is-invisible");
        this.generateContent();
    }

    generateContent() {
        const paragraphWrapper = document.createElement("div");
        paragraphWrapper.classList.add("paragraph-wrapper");

        const infParagraph = document.createElement("p");
        const askParagraph = document.createElement("p");
        infParagraph.classList.add("paragraph");
        askParagraph.classList.add("paragraph");
        askParagraph.innerText = `Would you like to play again?`;

        if(this.type === SUCCESS) {
            infParagraph.innerText = `You guessed all the letters!`;
            infParagraph.classList.add("colored-green");
        } else {
            infParagraph.innerText = `You didn't guess all the letters...`;
            infParagraph.classList.add("colored-red");
        }

        paragraphWrapper.appendChild(infParagraph);
        paragraphWrapper.appendChild(askParagraph);
        this.gameOverWrapper.appendChild(paragraphWrapper);

        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("button-wrapper");
        this.gameOverWrapper.appendChild(buttonWrapper)
        this.buttonWrapper = buttonWrapper;

        this.createResetButton();  
    }

    createResetButton() {
        const restartButton = document.createElement("button");
        restartButton.addEventListener('click', () => {
            this.resetGame();
        });
        restartButton.innerText = 'Restart';
        restartButton.classList.add("reset-button");
        this.buttonWrapper.appendChild(restartButton);
    }

    resetGame() {
        console.log('restart');
        document.getElementById("keyboard-wrapper").innerHTML = null;
        this.gameOverWrapper.classList.add("is-invisible");
        this.keyboardWrapper.classList.remove("is-invisible");
        const sentenceDisplay = document.getElementById("sentence-display");
        sentenceDisplay.innerHTML = null;
        sentenceDisplay.classList.remove("colored-red", "colored-green");
        document.getElementById("picture").src = 'img/s0.jpg';
        this.gameOverWrapper.classList.add("is-invisible");
        this.gameOverWrapper.innerHTML = null;
        startGame();
    }
}
