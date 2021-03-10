export class Display {
    constructor(baseSentence) {
        this.sentenceDisplay = document.getElementById("sentence-display");
        this.baseSentence = baseSentence;
        this.sentenceDisplay.innerText = this.hideCharacters();
    }

    hideCharacters() {
        return this.baseSentence.split('').map((letter) => letter === ' ' ? letter : '-').join('');
    }
}