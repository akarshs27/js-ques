// Shuffle Array

// https://www.youtube.com/watch?v=LxQK4F0xwmU

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomPosition];
    arr[randomPosition] = temp;
  }

  return arr;
}

console.log(shuffle([1, 5, 8, 3, 5, 6]));
