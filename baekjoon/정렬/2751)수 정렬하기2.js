const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();

input.sort((a, b) => a - b);

console.log(input.map(Number).join('\n'));
