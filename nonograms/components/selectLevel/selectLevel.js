import { CreateBaseComponent } from '../createComponent/createComponent.js';

export class LevelSelector extends CreateBaseComponent {
  #levels;
  #callback;
  #container;
  #titles;
  #form;

  constructor(levels, callback) {
    super();
    this.#levels = levels;
    this.#callback = callback;
    this.#container = this.createBaseComponent('div', ['levels']);
    this.#titles = [];
    this.#createView();
  }

  get container() {
    return this.#container;
  }

  #createView() {
    this.#form = this.createBaseComponent(
      'form',
      ['levels__form'],
      this.#container,
    );
    for (let level in this.#levels) {
      let select = this.createBaseComponent(
        'select',
        ['levels__select'],
        this.#form,
      );
      select.setAttribute('name', level);
      select.addEventListener('change', () => {
        this.#callback(select.value);
      });
      let firstElem = this.createBaseComponent(
        'option',
        ['levels__option'],
        select,
        level,
      );
      this.#titles.push(firstElem);
      firstElem.disabled = true;
      for (let j = 0; j < this.#levels[level].length; j++) {
        let options = this.createBaseComponent(
          'option',
          ['levels__option'],
          select,
          this.#levels[level][j].name,
        );
        options.setAttribute('value', this.#levels[level][j].id);
      }
    }
  }
}
