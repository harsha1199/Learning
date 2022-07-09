var rotate = function (nums, k) {
  if (nums.length == 1) return nums;

  if (k > nums.length) {
    k = k % nums.length;
  }

  let i = nums.length - k;

  let temp = [];
  for (let j = 0; j < i; j++) {
    temp.push(nums[j]);
  }

  for (let j = 0; j < k; j++) {
    nums[j] = nums[nums.length - k + j];
  }

  for (let j = k; j < nums.length; j++) {
    nums[j] = temp[j - k];
  }
  return nums;
};
