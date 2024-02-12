import { CreateBaseComponent } from '../createComponent/createComponent.js';

export class ViewTimer extends CreateBaseComponent {
  #DEFAULT_MIN = '00';
  #DEFAULT_SEC = '00';

  #container;
  #min;
  #sec;

  constructor() {
    super();
    this.#container = this.createBaseComponent('div', ['timer-container']);

    this.#min = this.createBaseComponent(
      'div',
      ['timer-min'],
      this.container,
      this.DEFAULT_MIN,
    );
    this.createBaseComponent('div', ['timer-separator'], this.container, ':');
    this.#sec = this.createBaseComponent(
      'div',
      ['timer-sec'],
      this.container,
      this.DEFAULT_SEC,
    );
  }

  timeOutput(min, sec) {
    this.#min.innerText = min;
    this.#sec.innerText = sec;
  }

  get container() {
    return this.#container;
  }
}
