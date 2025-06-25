const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const items = input.map(v => v.split(' ').map(Number));

const dp = Array(K + 1).fill(0); //메모리제이션을 한다

for (let [weight, value] of items) {
  for (let k = K; k >= weight; k--) {
    dp[k] = Math.max(dp[k], dp[k - weight] + value);
  }
}

console.log(dp[K]);

/**
 * 물건들의 가치의 최댓값을 알려주자 ---> DP 최적값 구하기
 * 물건의 무게 W
 * 물건의 가치 V
 * [W,V]
 * 물건의 개수 N = 4
 * 가방의 최대 무게 K = 7
 * return 가방에 넣을 수 있는 물건의 최대 가치
 */
