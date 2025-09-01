//9월1일

const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

let [S, P] = input.shift().split(' ').map(Number);
let DNA = input.shift().trim();
let need = input.shift().split(' ').map(Number); // [A,C,G,T]

const idx = { A: 0, C: 1, G: 2, T: 3 };
let result = 0;
const count = [0, 0, 0, 0];

for (let i = 0; i < P; i++) {
  count[idx[DNA[i]]]++;
}

const check = () => count.every((v, i) => v >= need[i]);

if (check()) result++;

for (let i = P; i < S; i++) {
  count[idx[DNA[i]]]++;
  count[idx[DNA[i - P]]]--;

  if (check()) result++;
}

console.log(result);
