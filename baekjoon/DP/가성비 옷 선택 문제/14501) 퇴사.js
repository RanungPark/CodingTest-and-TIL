const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const plans = input.map(v => v.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 0; i < N; i++) {
  const [time, price] = plans[i];

  dp[i + 1] = Math.max(dp[i + 1], dp[i]);

  if (i + time <= N) {
    dp[i + time] = Math.max(dp[i + time], dp[i] + price);
  }
}

console.log(dp[N]);

/**
 * 최대 수익을 구하라 --> DP
 * 최소 단위 => 상담일자
 */
