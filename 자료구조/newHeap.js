class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let curr = this.heap.length - 1;
    let parent = Math.floor(curr / 2);

    while (parent && this.heap[curr] > this.heap[parent]) {
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
      let maxIdx = curr;

      if (this.heap[left] && this.heap[left] > this.heap[maxIdx]) maxIdx = left;
      if (this.heap[right] && this.heap[right] > this.heap[maxIdx])
        maxIdx = right;

      if (maxIdx === curr) break;

      [this.heap[maxIdx], this.heap[curr]] = [
        this.heap[curr],
        this.heap[maxIdx],
      ];
      curr = maxIdx;
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

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let curr = this.heap.length - 1;
    let parent = Math.floor(curr / 2);

    while (parent && this.heap[curr] < this.heap[parent]) {
      [this.heap[curr], this.heap[parent]] = [
        this.heap[parent],
        this.heap[curr],
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
      let maxIdx = curr;

      if (this.heap[left] && this.heap[left] < this.heap[maxIdx]) maxIdx = left;
      if (this.heap[right] && this.heap[right] < this.heap[maxIdx])
        maxIdx = right;

      if (curr === maxIdx) break;

      [this.heap[curr], this.heap[maxIdx]] = [
        this.heap[maxIdx],
        this.heap[curr],
      ];
      curr = maxIdx;
    }

    return top;
  }
}
