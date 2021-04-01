export class Keyboard {
    constructor(showLetterInDisplay, changeImgSrcInPicture) {
        this.keyboardWrapper = document.getElementById("keyboard-wrapper");
        this.createKeyboard();
        this.showLetterInDisplay = showLetterInDisplay;
        this.changeImgSrcInPicture = changeImgSrcInPicture;
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
            const hasUserMatch = this.showLetterInDisplay(letter);
            button.disabled = true;
            if(hasUserMatch) {
                button.classList.add("has-match");
            } else {
                button.classList.add("has-no-match");
                this.changeImgSrcInPicture();
            }
        })
        
        buttonWrapper.appendChild(button);
        this.keyboardWrapper.appendChild(buttonWrapper);
    }
}
