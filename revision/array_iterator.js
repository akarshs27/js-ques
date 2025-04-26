class helper {
  constructor(arr) {
    this.arr = arr;
    this.currentIndex = 0;
  }

  next() {
    if (this.currentIndex === this.arr.length) return null;
    return this.arr[this.currentIndex++];
  }

  done() {
    return this.currentIndex === this.arr.length;
  }
}

let iterator = new helper([1, 2, "hello"]);
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"
