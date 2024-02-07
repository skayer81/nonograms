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