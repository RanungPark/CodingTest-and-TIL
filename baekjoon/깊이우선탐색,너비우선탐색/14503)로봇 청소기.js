const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const [r, c, d] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(' ').map(Number));
const 방향 = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);
let count = 0;

let x = r;
let y = c;
let dir = d;

while (true) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    count++;
  }

  let cleaned = false;

  for (let i = 0; i < 4; i++) {
    dir = (dir + 3) % 4;
    const nx = x + 방향[dir][0];
    const ny = y + 방향[dir][1];

    if (map[nx][ny] === 0 && !visited[nx][ny]) {
      x = nx;
      y = ny;
      cleaned = true;
      break;
    }
  }

  if (!cleaned) {
    const backDir = (dir + 2) % 4;
    const bx = x + 방향[backDir][0];
    const by = y + 방향[backDir][1];

    if (map[bx][by] === 1) break;
    x = bx;
    y = by;
  }
}

console.log(count);
