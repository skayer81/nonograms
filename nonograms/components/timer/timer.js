import { ViewTimer } from './viewTimer.js';

export class Timer {
  #viewTime;
  #isTimerStart;
  #timer;
  #currentTime;

  constructor() {
    this.#isTimerStart = false;
    this.#viewTime = new ViewTimer();
  }

  start() {
    this.#timer = setInterval(() => {
      this.#currentTime++;
      this.#timeOutput();
    }, 1000);
  }

  stop() {
    clearInterval(this.#timer);
    this.#isTimerStart = false;
  }

  getTime() {
    return this.#currentTime;
  }

  setTime(time = 0) {
    this.stop();
    this.#currentTime = Number(time);
    this.#timeOutput();
  }

  get container() {
    return this.#viewTime.container;
  }

  #timeOutput() {
    this.#viewTime.timeOutput(
      String(Math.trunc(this.#currentTime / 60)).padStart(2, '0'),
      String(this.#currentTime % 60).padStart(2, '0'),
    );
  }
}
