// 2025.3.27 12:19

const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let count = 0;
let left = 0;
let right = 0;
let sum = arr[0]; // 현재 부분합

while (right < M) {
  if (sum === N) {
    count++; // 원하는 합을 찾으면 카운트 증가
  }

  if (sum >= N) {
    // 합이 N보다 크거나 같다면 왼쪽 포인터 이동
    sum -= arr[left];
    left++;
  } else {
    // 합이 N보다 작다면 오른쪽 포인터 이동
    right++;
    if (right < M) sum += arr[right];
  }
}

console.log(count);
