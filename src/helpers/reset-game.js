import { Keyboard } from '../components/keyboard';
import { Display } from '../components/display';
import { Picture } from '../components/picture';

export function startGame() {
    const display = new Display();
    const picture = new Picture();
    new Keyboard(display.showLetter, picture.changeImgSrc);
}
    



