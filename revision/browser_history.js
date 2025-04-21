// You must be familiar with browser history and its functionality where you can navigate through the browsed history. Implement the same in JavaScript.

// It will have the following functionality

// visit(url): Marks the entry of the URL in the history.
// current(): Returns the URL of the current page.
// backward(): Navigate to the previous url.
// forward(): Navigate to the next url.

// Input:
// const bh = new BrowserHistory();
// bh.visit("A");
// console.log(bh.current());
// bh.visit("B");
// console.log(bh.current());
// bh.visit("C");
// console.log(bh.current());
// bh.goBack();
// console.log(bh.current());
// bh.visit("D");
// console.log(bh.current());

// Output:
// "A"
// "B"
// "C"
// "B"
// "D"

class BrowserHistory {
  constructor() {
    this.history = [];
    this.index = -1;
  }

  visit(url) {
    this.history.push(url);
    this.index++;
  }

  current() {
    return this.history[this.index];
  }

  goBack() {
    if (--this.index < 0) {
      return "Blank page";
    } else {
      return this.history[this.index];
    }
  }

  forward() {}
}

const bh = new BrowserHistory();
bh.visit("A");
console.log(bh.current());
bh.visit("B");
console.log(bh.current());
bh.visit("C");
console.log(bh.current());
bh.goBack();
console.log(bh.current());
bh.visit("D");
console.log(bh.current());
