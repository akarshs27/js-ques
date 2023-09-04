function getSmallestPositive(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    for (let i = min; i <= max; i++) {
      if (!arr.includes(i) && i !== 0 && i > 0) {
        return i;
      }
      if (i === max) {
        return i + 1;
      }
    }
  }
  
  console.log(getSmallestPositive([1, 1, 0, -1, -2]));