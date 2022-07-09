const TwoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return [map[nums[i]], i];
    } else {
      map[target - nums[i]] = i;
    }
  }
};

const intArray = [0, 4, 3, 0];
const target = 0;
console.log(TwoSum(intArray, target));
