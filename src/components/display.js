import { SUCCESS } from "../consts/main";
import { GameOver } from "./game-over";

export class Display {
    constructor() {
        this.showLetter = this.showLetter.bind(this);

        this.sentenceDisplay = document.getElementById("sentence-display");
        this.baseSentence = 'ABC';
        this.currentSentence = this.hideLetters(this.baseSentence);
        this.renderDisplayContent(this.currentSentence);
    }

    hideLetters(sentence) {
        return sentence.split('').map((letter) => letter === ' ' ? letter : '-').join('');
    }

    renderDisplayContent(sentence) {
        this.sentenceDisplay.innerText = sentence;
    }

    showLetter(chosenLetter) {
        const foundLetter = this.baseSentence.split('').find((letter) => letter === chosenLetter);
        // console.log(!!foundLetter); => stara metoda zamieniania wartości na boolean
        const isMatch = Boolean(foundLetter);
        if(isMatch) {
            // E
            // ['J', 'E', 'S', 'T', 'E']
            // ['-', '-', '-', '-', '-'] => ['-', 'E', '-', '-', 'E']
            const newSentence = this.currentSentence.split('').map((letter, index) => {
                const baseSentenceLetter = this.baseSentence.charAt(index);
                return baseSentenceLetter === chosenLetter ? chosenLetter : letter;
            }).join('');
            this.currentSentence = newSentence;
            this.renderDisplayContent(this.currentSentence);

            const hasUserWon = !this.currentSentence.split('').some((letter) => letter === '-');
            if(hasUserWon) {
                new GameOver(SUCCESS);
            }
        }
        return isMatch;
    }
}
