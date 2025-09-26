const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();

for (let i = 0; i < N; i++) {
  const n = +input.shift();

  const obj = {};

  for (let i = 0; i < n; i++) {
    const [value, key] = input.shift().split(' ');
    if (obj[key] === undefined) {
      obj[key] = [];
    }
    obj[key] = [...obj[key], value];
  }

  let result = 1;
  for (const key in obj) {
    result *= obj[key].length + 1;
  }
  result -= 1;

  console.log(result);
}
