export class Keyboard {
    constructor() {
        this.keyboardWrapper = document.getElementById("keyboard-wrapper");
        this.createKeyboard();
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
        
        buttonWrapper.appendChild(button);
        this.keyboardWrapper.appendChild(buttonWrapper);
    }
}
