const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const n = +input.shift();

  const map = [];
  for (let i = 0; i < 2; i++) {
    map.push(input.shift().split(' ').map(Number));
  }

  const dpTop = Array(n).fill(0);
  const dpBottom = Array(n).fill(0);
  const dpNone = Array(n).fill(0);

  dpTop[0] = map[0][0];
  dpBottom[0] = map[1][0];
  dpNone[0] = 0;

  for (let i = 1; i < n; i++) {
    dpTop[i] = Math.max(dpBottom[i - 1], dpNone[i - 1]) + map[0][i];
    dpBottom[i] = Math.max(dpTop[i - 1], dpNone[i - 1]) + map[1][i];
    dpNone[i] = Math.max(dpTop[i - 1], dpBottom[i - 1], dpNone[i - 1]);
  }

  const result = Math.max(dpTop[n - 1], dpBottom[n - 1], dpNone[n - 1]);
  console.log(result);
}
