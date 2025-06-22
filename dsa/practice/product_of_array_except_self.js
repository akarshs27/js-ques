var productExceptSelf = function (nums) {
  let leftArr = [];
  let leftProdValue = nums[0];
  let rightArr = [];
  let rightProdValue = nums[nums.length - 1];
  const result = [];

  leftArr[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftProdValue;
    leftProdValue = leftProdValue * nums[i];
  }

  rightArr[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightProdValue;
    rightProdValue = rightProdValue * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(leftArr[i] * rightArr[i]);
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
