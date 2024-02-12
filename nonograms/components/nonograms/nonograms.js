import { nonograms } from './data.js';

export class Nonograms {
  #nonograms;

  constructor() {
    this.#nonograms = nonograms;
  }

  getRandom() {
    return this.#nonograms[Math.floor(Math.random() * this.#nonograms.length)];
  }

  getRandomEasy() {
    const easyNonograms = this.#nonograms.filter(elem => elem.heigth === 5);
    const index = Math.floor(Math.random() * easyNonograms.length);
    const result = easyNonograms[index];
    return result;
  }

  getList() {
    let result = {
      easy: [],
      medium: [],
      hard: [],
    };
    let level;
    for (let elem of this.#nonograms) {
      if (elem.width <= 5) {
        level = 'easy';
      }
      if (elem.width > 5 && elem.width <= 10) {
        level = 'medium';
      }
      if (elem.width > 10) {
        level = 'hard';
      }
      result[level].push({ name: elem.name, id: elem.id });
    }
    return result;
  }

  getNonogramsById(id) {
    for (let elem of this.nonograms) {
      if (elem.id === id) {
        return elem;
      }
    }
  }
}
