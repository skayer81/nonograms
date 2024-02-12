import { ViewModalWindow } from './viewModalWindow.js';
import { CreateBaseComponent } from '../createComponent/createComponent.js';

export class ModalWindows extends CreateBaseComponent {
  #EMPTY_RECORDS = 'Пока рекордов нет';

  #modalWindows;

  constructor() {
    super();
    this.#modalWindows = new ViewModalWindow();
  }
  showWinWindow = (name, time) => {
    const title = this.createBaseComponent('h2', [], null, `Поздравляем!`);
    const content = this.createBaseComponent(
      'div',
      [],
      null,
      `Нонограмму: '${name}' `,
    );
    const content2 = this.createBaseComponent(
      'div',
      [],
      null,
      `вы открыли за ${time} сек.`,
    );
    this.#modalWindows.removeContent();
    this.#modalWindows.addContent([title, content, content2]);
    this.#modalWindows.open();
  };

  showRecordsWindow(records) {
    this.#modalWindows.removeContent();
    const title = this.createBaseComponent(
      'h2',
      ['modal-title'],
      null,
      `Таблица рекордов`,
    );
    let content;
    if (!records) {
      content = this.createBaseComponent(
        'h3',
        ['records-table'],
        null,
        this.#EMPTY_RECORDS,
      );
    } else {
      content = this.createBaseComponent('table', ['records-table']);

      let trOfHead = this.createBaseComponent('tr', [], content);
      this.createBaseComponent('th', [], trOfHead, 'Название');
      this.createBaseComponent('th', [], trOfHead, 'Сложность');
      this.createBaseComponent('th', [], trOfHead, 'Время');

      for (let i = 0; i < records.length; i++) {
        let tr = this.createBaseComponent('tr', [], content);
        this.createBaseComponent('td', [], tr, records[i].name);
        this.createBaseComponent('td', [], tr, records[i].level);
        this.createBaseComponent('td', [], tr, records[i].time);
      }
    }

    this.#modalWindows.addContent([title, content]);
    this.#modalWindows.open();
  }
}
