import { FAIL, SUCCESS } from "../consts/main";

export class GameOver {
    constructor(type) {
        this.gameOverWrapper = document.getElementById("game-over-wrapper");
        this.gameOverWrapper.classList.remove("is-invisible");
        this.type = type;
        document.getElementById("keyboard-wrapper").classList.add("is-invisible");
        this.createGameOverContent();
    }

    createGameOverContent() {
        switch(this.type) {
            case FAIL:
                return this.generateFailContent();
            case SUCCESS:
                return this.generateSuccessContent();
            default: 
                throw new Error('game over type is required');
        }
    }

    generateFailContent() {
        // this.gameOverWrapper.innerHTML = 'fail';
        // this.createResetButton();
        // this.createCloseButton();
        this.generateContent();
    }

    generateSuccessContent() {
        /*
        stwórz div na ps {
            p że wygrał
            p czy jeszcze raz
        }

        stwórz div na btns {
            btn tak = replay
            btn nie = close
        }

        */

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
        this.createCloseButton();     
    }

    createResetButton() {
        const restartButton = document.createElement("button");
        restartButton.addEventListener('click', () => {
            console.log('click');
        })
        restartButton.innerText = 'Resart';
        restartButton.classList.add("reset-button");
        this.buttonWrapper.appendChild(restartButton);
    }

    createCloseButton() {
        const closeButton = document.createElement("button");
        closeButton.addEventListener('click', () => {
            window.close();
        })
        closeButton.innerText = 'Close';
        closeButton.classList.add("close-button");
        this.buttonWrapper.appendChild(closeButton);
    }
}

// zd
// pseudo kod -> czytać
// tworzenie restartbutton ma być osobną metodą plus podłączyć do sukcesu i porażki
// utworzyć elementy za pomocą js i ostylować je (przegrana i wygrana)
// mechanizm resetowania gry => opcjonalne do zrobienia
// api

