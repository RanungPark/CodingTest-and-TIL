const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const X = +input.shift();

const dp = Array.from({ length: X + 1 }, () => Infinity);

dp[1] = 0; // 1은 0번만에 만들 수 있음

for (let i = 1; i <= X; i++) {
  if (i + 1 <= X) dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
  if (i * 2 <= X) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
  if (i * 3 <= X) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
}

console.log(dp);
