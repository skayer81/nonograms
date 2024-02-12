import { CreateBaseComponent } from '../createComponent/createComponent.js';
import { EventEmitter } from '../viewField/eventEmmiter.js';

export class ViewTopHints extends CreateBaseComponent {
  constructor() {
    super();
    this.container = this.createBaseComponent('div', ['top-hints']);
    this.eventEmitter = new EventEmitter();
    this.eventEmitter.on(
      this.eventEmitter.events.mouseOverColumn,
      this.mouseOverColumn,
    );
    this.eventEmitter.on(
      this.eventEmitter.events.mouseOutColumn,
      this.mouseOutColumn,
    );
  }

  createHints(hints) {
    this.column = [];
    this.container.innerHTML = '';
    const arrayOfHints = hints.split('  ').map(element => element.split(' '));
    const maxLength = arrayOfHints.reduce(
      (acc, elem) => (elem.length > acc ? elem.length : acc),
      0,
    );
    arrayOfHints.forEach((element, index) => {
      let columnOfHints = this.createBaseComponent(
        'div',
        ['column-hints'],
        this.container,
      );
      this.column.push(columnOfHints);
      if ((index + 1) % 5 === 0) {
        columnOfHints.classList.add('top-hint__border');
      }
      for (let i = element.length; i < maxLength; i++) {
        this.createBaseComponent('div', ['top-hint'], columnOfHints);
      }
      element.forEach(item => {
        const cell = this.createBaseComponent(
          'div',
          ['top-hint'],
          columnOfHints,
          item,
        );
        cell.addEventListener('click', () => {
          cell.classList.toggle('cross');
        });
      });
    });
  }

  mouseOverColumn = index => {
    this.column[index].classList.add('mouse-over');
  };
  mouseOutColumn = (...index) => {
    this.column[index].classList.remove('mouse-over');
  };
}
