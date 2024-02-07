export class EventEmitter{
    constructor(){
        if (EventEmitter._instance){
            return EventEmitter._instance
        }
        EventEmitter._instance = this;
        this.listeners = {}
    }

    on(event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
       // return listener;
      }

      off(event, listener) {
        if (this.listeners[event]) {
          this.listeners[event] = this.listeners[event].filter((l) => l !== listener);
        }
      }

      emit(event, args) {
        if (this.listeners[event]) {
          this.listeners[event].forEach((listener) => {
            listener(...args);
          });
        }
      }
}


// static ;

// on(event, listener) {
//   if (!EventEmitter.#listeners[event]) {
//     EventEmitter.#listeners[event] = [];
//   }
//   EventEmitter.#listeners[event].push(listener);
//   return listener;
// }

// off(event, listener) {
//   if (EventEmitter.#listeners[event]) {
//     EventEmitter.#listeners[event] = EventEmitter.#listeners[event].filter((l) => l !== listener);
//   }
// }

// emit(event, ...args) {
//   if (EventEmitter.#listeners[event]) {
//     EventEmitter.#listeners[event].forEach((listener) => {
//       listener(...args);
//     });
//   }
// }
// }

// Explain
// class WebSocketService {
//   constructor() {
//     if (WebSocketService._instance) {
//       return WebSocketService._instance;
//     }

//     WebSocketService._instance = this;
//   }
// }