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
        this.gameOverWrapper.innerHTML = 'fail';
    }

    generateSuccessContent() {
        const restartButton = document.createElement("button");
        restartButton.addEventListener('click', () => {
            console.log('click');
        })
        restartButton.innerText = 'Restart';
        this.gameOverWrapper.appendChild(restartButton);
    }
}

// zd
// pseudo kod -> czytać
// tworzenie restartbutton ma być osobną metodą plus podłączyć do suksesu i porażki
// utworzyć elementy za pomocą js i ostylować je (przegrana i wygrana)
// mechanizm resetowania gry => opcjonalne do zrobienia
// api

