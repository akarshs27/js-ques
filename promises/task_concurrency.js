const promises = [
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Promise 1 resolved");
        resolve();
      }, 1000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Promise 2 resolved");
        resolve();
      }, 2000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Promise 3 resolved");
        resolve();
      }, 1000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Promise 4 resolved");
        resolve();
      }, 0)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Promise 5 resolved");
        resolve();
      }, 5000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        console.log("Promise 6 resolved");
        resolve();
      }, 6000)
    ),
];

class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.queue = [];
    this.activeIndex = 0;
  }

  async push(promise) {
    if (this.activeIndex < this.concurrency) {
      this.execute(promise);
    } else {
      this.queue.push(promise);
    }
  }

  async execute(promise) {
    this.activeIndex++;
    try {
      await promise();
    } finally {
      this.activeIndex--;
      if (this.queue.length) {
        const nextPromiseToBeExecuted = this.queue.shift();
        this.execute(nextPromiseToBeExecuted);
      }
    }
  }
}

const runner = new TaskRunner(3);
promises.forEach((promise) => runner.push(promise));

// Promise 1 resolved
// Promise 3 resolved
// Promise 4 resolved
// Promise 2 resolved
// Promise 5 resolved
// Promise 5 resolved
