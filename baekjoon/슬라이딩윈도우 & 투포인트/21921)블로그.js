//2025.03.28 3:58
//4:22

const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, X] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let maxSum = 0;
let count = 0;

let currentSum = arr.slice(0, X).reduce((prev, curr) => prev + curr, 0);
maxSum = currentSum;
count = 1;

for (let i = X; i < N; i++) {
  currentSum = currentSum - arr[i - X] + arr[i];

  if (currentSum > maxSum) {
    maxSum = currentSum;
    count = 1;
  } else if (currentSum === maxSum) {
    count++;
  }
}

console.log(maxSum === 0 ? 'SAD' : `${maxSum}\n${count}`);
