export class EventEmitter {
  #EVENTS = {
    mouseOverRow: 'mouseOverRow',
    mouseOutRow: 'mouseOutRow',
    mouseOutColumn: 'mouseOutColumn',
    mouseOverColumn: 'mouseOverColumn',
  };

  constructor() {
    if (EventEmitter._instance) {
      return EventEmitter._instance;
    }
    EventEmitter._instance = this;

    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(listener => {
        listener(...args);
      });
    }
  }

  off(event, listener) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }
  }

  get events() {
    return this.#EVENTS;
  }
}
