import { CreateButton } from '../createComponent/createComponent.js';

export class ThemeChanger extends CreateButton {
  #container;

  constructor() {
    super();
    this.#container = this.createButton(
      ['button'],
      { type: 'button' },
      'Переключить тему',
      this.#change,
    );
  }

  #change() {
    document.body.classList.toggle('darkTheme');
  }

  get container() {
    return this.#container;
  }
}
