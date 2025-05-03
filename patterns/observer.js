// With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

// An observable object usually contains 3 important parts:

// observers: an array of observers that will get notified whenever a specific event occurs
// subscribe(): a method in order to add observers to the observers list
// unsubscribe(): a method in order to remove observers from the observers list
// notify(): a method to notify all observers whenever a specific event occurs

// REACT

// Observable.js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

export default new Observable();

// App.js
import React from "react";
import observable from "./Observable";

function handleRedClick() {
  observable.notify("Red button clicked");
}

function handleBlueClick() {
  observable.notify("Blue button clicked");
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

observable.subscribe(logger);

export default function App() {
  return (
    <div className="App">
      <button onClick={handleRedClick}>Red</button>
      <button onClick={handleBlueClick}>Green</button>
      <ToastContainer />
    </div>
  );
}




// JAVASCRIPT

//index.js
import './style.css';
import Observer from './observer.js';
import './analytics.js';

const pinkBtn = document.getElementById('pink-btn');
const blueBtn = document.getElementById('blue-btn');

pinkBtn.addEventListener('click', () => {
  const data = '🎀 Click on pink button! 🎀';
  Observer.notify(data);
});

blueBtn.addEventListener('click', () => {
  const data = '🦋 Click on blue button! 🦋';
  Observer.notify(data);
});

// index.html
<div id="app">
  <button id="pink-btn">I'm a pink button!</button>
  <button id="blue-btn">I'm a blue button!</button>
</div>

// analytics.js
import Observer from './observer';

export function sendToGoogleAnalytics(data) {
  console.log('Sent to Google analytics: ', data);
}

export function sendToCustomAnalytics(data) {
  console.log('Sent to custom analytics: ', data);
}

export function sendToEmail(data) {
  console.log('Sent to email: ', data);
}

Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);

//observer.js
const observers = [];

// export default Object.freeze({
//   notify: (data) => observers.forEach((observer) => observer(data)),
//   subscribe: (func) => observers.push(func),
//   unsubscribe: (func) => {
//     [...observers].forEach((observer, index) => {
//       if (observer === func) {
//         observers.splice(index, 1);
//       }
//     });
//   },
// });