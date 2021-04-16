import './styles/main.scss';
import { Keyboard } from './components/keyboard';
import { Display } from './components/display';
import { Picture } from './components/picture';

const display = new Display();
const picture = new Picture();
new Keyboard(display.showLetter, picture.changeImgSrc);


// TODO
// game over (fail and win)
// reset
// mechanizm na małe i duże litery, przecinki
// dodanie dźwięku
// podłączyć się pod api
