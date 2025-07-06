const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(v => v.split(' ').map(Number)).shift();

const count = Array(M).fill(0);
let prefix = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
  prefix = (prefix + arr[i]) % M;
  if (prefix === 0) answer++; // 누적합 자체가 나머지 0인 경우
  count[prefix]++;
}

for (let c of count) {
  answer += (c * (c - 1)) / 2; // 같은 나머지 끼리 조합
}

console.log(answer);
