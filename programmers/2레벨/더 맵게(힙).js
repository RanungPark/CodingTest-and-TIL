class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let curr = this.heap.length - 1;
    let parent = Math.floor(curr / 2);

    while (parent && this.heap[curr] < this.heap[parent]) {
      [this.heap[parent], this.heap[curr]] = [
        this.heap[curr],
        this.heap[parent],
      ];
      curr = parent;
      parent = Math.floor(curr / 2);
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
      let smallest = curr;

      if (this.heap[left] && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (this.heap[right] && this.heap[right] < this.heap[smallest])
        smallest = right;

      if (smallest === curr) break;

      [this.heap[smallest], this.heap[curr]] = [
        this.heap[curr],
        this.heap[smallest],
      ];
      curr = smallest;
    }

    return top;
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  scoville.forEach(v => heap.push(v));

  let count = 0;

  if (heap.peek() >= K) return count;

  while (heap.size() >= 2 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    heap.push(first + second * 2);
    count++;
  }
  return heap.peek() >= K ? count : -1;
}
