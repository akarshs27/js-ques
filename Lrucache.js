// LRU stands for Least Recently Used. It uses the concept of temporal locality.
// In LRU we keep recenlty accessed item and remove least recenlty accessed item.

//Video Ref - https://www.youtube.com/watch?v=V_Z8Blyy0Mo

class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = [];
  }

  isCacheFull() {
    return this.cache.length === this.capacity;
  }

  getItem(item) {
    return this.cache.indexOf(item);
  }

  setItem(item) {
    if (this.getItem(item) === -1) {
      if (this.isCacheFull()) {
        this.cache.pop();
        this.cache.unshift(item);
      } else {
        this.cache.unshift(item);
      }
    } else {
      this.cache.splice(this.getItem(item), 1);
      this.cache.unshift(item);
    }

    console.log("Cache", this.cache);
  }
}

let cache = new LRU(4);
cache.setItem(10);
cache.setItem(30);
cache.setItem(20);
cache.setItem(10);
cache.setItem(20);
cache.setItem(50);
cache.setItem(40);
cache.setItem(30);
