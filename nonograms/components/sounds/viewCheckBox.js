import { CreateBaseComponent } from '../createComponent/createComponent.js';

export class ViewCheckBox extends CreateBaseComponent {
  #container;
  #checkbox;

  constructor(innerText, callback) {
    super();
    this.#container = this.createBaseComponent('div', ['sound-container']);
    const label = this.createBaseComponent(
      'label',
      ['label'],
      this.container,
      innerText,
    );
    this.#checkbox = this.createBaseComponent('input', ['checkbox'], label);
    this.#checkbox.setAttribute('type', 'checkbox');
    this.#checkbox.addEventListener('change', () => {
      callback(this.#checkbox.checked);
    });
  }

  get container() {
    return this.#container;
  }
}
