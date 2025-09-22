/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const path = [];

  const backtrack = (start = 0) => {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack();

  console.log(result);
};

subsets([1, 2, 3]);
subsets([0]);
