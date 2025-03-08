// https://www.youtube.com/watch?v=PZlXG_-ZdfU
// https://www.patterns.dev/posts/singleton-pattern

function Counter() {
  this.count = 0;
  this.increment = () => {
    this.count++;
  };
  this.decrement = () => {
    this.count--;
  };
}

let counter1 = new Counter();
let counter2 = new Counter();
console.log(counter1 === counter2);

const singleton = (function () {
  let instance = 0;

  return {
    getInstance() {
      if (!instance) {
        instance = new Counter();
      }
      return instance;
    },
  };
})();

let counter3 = singleton.getInstance();
let counter4 = singleton.getInstance();

console.log(counter3 === counter4);
