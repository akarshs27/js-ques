// https://www.youtube.com/watch?v=ENTl51PsLM8

window.localStorageWithExpiry = {
  setItem: function (key, value, expiryTime) {
    let result = {
      value,
      expiryTime: Date.now() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: function (key) {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    if (data.expiryTime <= Date.now()) {
      localStorage.removeItem(key);
      return null;
    }
    return data.value;
  },
  removeItem: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  },
};

localStorageWithExpiry.setItem("test", "Testing 123", 5000);
setTimeout(() => {
  console.log(localStorageWithExpiry.getItem("test"));
}, 2000);
