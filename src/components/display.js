export class Display {
    constructor() {
        this.sentenceDisplay = document.getElementById("sentence-display");
        this.baseSentence = 'JESTEM NORBERT';
        this.currentSentence = this.hideCharacters(this.baseSentence);
        this.renderDisplayContent(this.currentSentence);
    }

    hideCharacters(sentence) {
        return sentence.split('').map((letter) => letter === ' ' ? letter : '-').join('');
    }

    renderDisplayContent(sentence) {
        this.sentenceDisplay.innerText = sentence;
    }

    showLetter(chosenLetter) {
        console.log(chosenLetter);
    }
}
