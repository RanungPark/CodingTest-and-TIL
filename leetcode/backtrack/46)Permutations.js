// 9월19일 7시 20분 ~ 7시 40분

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//초기 작성한 5초대 코드
var permute = function (nums) {
  const result = [];

  const backtrack = start => {
    if (start.length === nums.length) {
      result.push(start);
      return;
    }

    const filterNums = nums.filter(num => !start.includes(num));

    for (let num of filterNums) backtrack([...start, num]);
  };

  for (let num of nums) backtrack([num]);

  return result;
};

// GPT로 성능개선을 요구했을 때 1초로 나온 코드
function permute(nums) {
  const result = [];
  const visited = Array(nums.length).fill(false);
  const path = [];

  function backtrack() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop();
      visited[i] = false;
    }
  }

  backtrack();
  return result;
}

permute([1, 2, 3]);
permute([0, 1]);
permute([1]);
