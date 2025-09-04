const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let N = +input.shift();

const map = input.map(v => v.split(' ').map(Number));

let white = 0,
  blue = 0;

const isAllSameColor = (x, y, size) => {
  const color = map[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (map[i][j] !== color) return false;
    }
  }
  return true;
};

const divide = (x, y, size) => {
  const color = map[x][y];

  if (isAllSameColor(x, y, size)) {
    color === 0 ? white++ : blue++;
    return;
  }

  let half = size / 2;
  divide(x, y, half);
  divide(x + half, y, half);
  divide(x, y + half, half);
  divide(x + half, y + half, half);
};

divide(0, 0, N);

console.log(white);
console.log(blue);
