const FirstDuplicate = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    } else {
      map[nums[i]] = 1;
    }
  }
};

const nums = [2, 5, 1, 2, , 3, 5, 1];
console.log(FirstDuplicate(nums));
