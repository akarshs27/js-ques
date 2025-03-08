// Implement a Scheduler with Concurrency Control
// https://www.youtube.com/watch?v=-ZnBEWFkDOk&t=127s
// Problem: Implement a Task Scheduler class that runs tasks with a maximum concurrent limit.

class TaskScheduler {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.currentRunningTasks = 0;
    this.__waitingQueue = [];
  }

  getNextTask() {
    if (
      this.currentRunningTasks < this.concurrency &&
      this.__waitingQueue.length > 0
    ) {
      const nextTask = this.__waitingQueue.shift();
      nextTask();
    }
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      async function __taskRunner() {
        this.currentRunningTasks = this.currentRunningTasks + 1;
        try {
          const result = await task();
          console.log("Result", result);
          resolve(result);
        } catch (err) {
          reject("Task Failed", err);
        } finally {
          this.currentRunningTasks = this.currentRunningTasks - 1;
          this.getNextTask();
        }
      }

      if (this.currentRunningTasks < this.concurrency) {
        __taskRunner.call(this);
      } else {
        this.__waitingQueue.push(__taskRunner.bind(this));
      }
    });
  }
}

const scheduler = new TaskScheduler(2);

// Exmaple 1
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 1"), 2000))
);
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 2"), 2000))
);
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 3"), 2000))
);
scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 4"), 2000))
);

//Example 2

async function saveToDb(message) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Message ${message} saved to DB`);
      res();
    }, 2000);
  });
}

function chat() {
  const messages = Array(100).fill(null);

  messages.forEach((_, index) => {
    const message = `Message: ${index}`;
    scheduler.addTask(() => saveToDb(message));
  });
}

chat();
