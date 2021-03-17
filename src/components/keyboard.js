export class Keyboard {
    constructor(showLetterInDisplay) {
        this.keyboardWrapper = document.getElementById("keyboard-wrapper");
        this.createKeyboard();
        this.showLetterInDisplay = showLetterInDisplay;
    }

    createKeyboard() {
        const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ'.split('');
        alphabet.forEach((letter) => {
            this.createLetterButton(letter);
        });
    }

    createLetterButton(letter) {
        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add('keyboard-button-wrapper');

        const button = document.createElement("button");
        button.innerText = letter;
        button.classList.add('keyboard-button');

        button.addEventListener('click', () => {
            this.showLetterInDisplay(letter);
        })
        
        buttonWrapper.appendChild(button);
        this.keyboardWrapper.appendChild(buttonWrapper);
    }
}
