// Bsased on observer pattern

// https://www.youtube.com/watch?v=Gz8NVkPxOiM

// on(event, listener): Registers an event listener.
// emit(event, args): Emits an event, notifying all registered listeners.
// off(event, listener) Unregisters an event listener
// once(event, listener): Registers a listener that is called only once.

class MyEventEmitter {
  constructor() {
    //  {
    //  "event" : [] // Array of listeners
    // }
    this.__event_listeners = {};
  }

  on(event, listener) {
    if (!this.__event_listeners[event]) {
      this.__event_listeners[event] = [];
    }

    this.__event_listeners[event].push(listener);
    console.log("event listeners", this.__event_listeners);
    return true;
  }

  emit(event, ...args) {
    if (!this.__event_listeners[event]) {
      return false;
    }

    let listeners = this.__event_listeners[event];
    console.log("listeners", listeners);
    listeners.forEach((listener) => listener(...args));
  }

  off(event, listener) {
    if (!this.__event_listeners[event]) {
      return false;
    }

    const index = this.__event_listeners[event].indexOf(listener);
    if (index === -1) {
      return false;
    }

    this.__event_listeners[event].splice(index, 1);
    return true;
  }

  once(event, listener) {
    const wrapperFn = (...args) => {
      listener(...args);
      this.off(event, listener);
    };

    this.on(event, wrapperFn);
    return true;
  }
}

const e = new MyEventEmitter();

const sendWhatsappMessage = (username) =>
  console.log(`Send message on whatsapp to ${username}`);

e.on("user:sign_up", (username) => console.log(`${username} signed up`));
e.on("user:sign_up", (username) =>
  console.log(`Send sign up mail to ${username}`)
);
e.on("user:sign_up", sendWhatsappMessage);

e.emit("user:sign_up", "Akarsh");
e.off("user:sign_up", sendWhatsappMessage);
e.emit("user:sign_up", "Akku");
