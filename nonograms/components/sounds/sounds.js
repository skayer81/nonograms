import { ViewCheckBox } from './viewCheckBox.js';

export class Sounds {
  #SOUNDS = {
    lclick: new Audio('./assets/sounds/lclick.mp3'),
    rclick: new Audio('./assets/sounds/rclick.mp3'),
    clear: new Audio('./assets/sounds/clear.mp3'),
    win: new Audio('./assets/sounds/win.mp3'),
  };

  #LABEL_TEXT = 'включить звуки';
  #soundOn;
  #checkbox;

  constructor() {
    this.#soundOn = false;
    this.#checkbox = new ViewCheckBox(this.#LABEL_TEXT, this.#soundOnChange);
  }

  play(event) {
    if (!this.#soundOn) return;
    this.#SOUNDS[event].currentTime = 0;
    this.#SOUNDS[event].play();
  }

  #soundOnChange = check => {
    this.#soundOn = check;
  };
  get container() {
    return this.#checkbox.container;
  }
}
