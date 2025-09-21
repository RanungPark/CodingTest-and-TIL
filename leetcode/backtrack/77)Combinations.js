// 9월 20일 12시 16분 ~ 12시 22분

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const backtrack = (nums, start) => {
    if (nums.length === k) {
      result.push(nums);
      return;
    }

    for (let i = start; i <= n; i++) {
      if (!nums.includes(i)) {
        dfs([...nums, i], i + 1);
      }
    }
  };

  backtrack([], 1);

  console.log(result);
};

combine(4, 2);
combine(1, 1);
