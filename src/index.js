import './styles/main.scss';
import { Keyboard } from './components/keyboard';
import { Display } from './components/display';

const display = new Display();
new Keyboard(display.showLetter);

