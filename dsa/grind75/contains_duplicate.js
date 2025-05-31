function containsDuplicate(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}

var containsDuplicate = function (nums) {
  let frequencyCounter = {};
  for (let val of nums) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
};
