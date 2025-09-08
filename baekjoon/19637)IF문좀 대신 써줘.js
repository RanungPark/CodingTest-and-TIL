const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const arrs = input.slice(0, N).map(v => {
  const [title, limit] = v.split(' ');
  return [title, Number(limit)];
});
const nums = input.slice(N, N + M).map(Number);

const findTitle = num => {
  let left = 0;
  let right = N - 1;
  let result = '';

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [title, limit] = arrs[mid];

    if (num <= limit) {
      result = title;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

let answer = '';

for (let i = 0; i < M; i++) {
  answer += findTitle(nums[i]) + '\n';
}

console.log(answer.trim());
