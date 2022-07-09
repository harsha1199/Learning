const MoveZeros = (nums) => {
  let i = -1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == 0 && i == -1) {
      i = j;
    } else if (nums[j] != 0 && i != -1) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
    }
  }
  return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log(MoveZeros(nums));
