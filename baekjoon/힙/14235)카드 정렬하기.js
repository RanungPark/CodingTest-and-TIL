const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  sweep(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(value) {
    this.heap.push(value);
    let curr = this.size();
    let par = Math.floor(curr / 2);

    while (par && this.heap[par] > this.heap[curr]) {
      this.sweep(curr, par);

      curr = par;
      par = Math.floor(curr / 2);
    }
  }

  pop() {
    if (this.heap.length <= 2) return this.heap.pop();

    const top = this.heap[1];
    this.heap[1] = this.heap.pop();
    let curr = 1;

    while (1) {
      let left = curr * 2;
      let right = curr * 2 + 1;
      let min = curr;

      if (this.heap[left] && this.heap[left] < this.heap[min]) min = left;
      if (this.heap[right] && this.heap[right] < this.heap[min]) min = right;

      if (curr === min) break;

      this.sweep(curr, min);

      curr = min;
    }

    return top;
  }
}

const n = +input.shift();
const heap = new MinHeap();
const numbers = input.map(Number);

for (let i = 0; i < n; i++) {
  heap.push(numbers[i]);
}

const sums = [];
let count = n - 1;

while (count) {
  const num1 = heap.pop();
  const num2 = heap.pop();
  const sum = num1 + num2;
  sums.push(sum);
  heap.push(sum);

  count--;
}

console.log(sums.reduce((prev, curr) => prev + curr, 0));
