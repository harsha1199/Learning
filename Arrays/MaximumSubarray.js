const MaximumSubarray = (nums) => {
  if (nums.length == 0) return 0;
  else if (nums.length == 1) return nums[0];

  let maxSum = nums[0];
  let interSum = 0;
  for (let i = 0; i < nums.length; i++) {
    interSum = Math.max(interSum + nums[i], nums[i]);

    if (interSum > maxSum) {
      maxSum = interSum;
    }
    if (interSum < 0) interSum = 0;
  }

  return maxSum;
};

let nums = [5, 4, -1, 7, 8];
console.log(MaximumSubarray(nums));
