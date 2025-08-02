class Heap {
  constructor() {
    this.heap = [null];
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  push(value) {
    this.heap.push(value);
    let curr = this.heap.length - 1;
    let parent = Math.floor(curr / 2);

    while (parent && this.heap[curr] > this.heap[parent]) {
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
      let maxIndex = curr;

      if (this.heap[left] && this.heap[left] > this.heap[maxIndex])
        maxIndex = left;
      if (this.heap[right] && this.heap[right] > this.heap[maxIndex])
        maxIndex = right;

      if (maxIndex === curr) break;

      [this.heap[curr], this.heap[maxIndex]] = [
        this.heap[maxIndex],
        this.heap[curr],
      ];

      curr = maxIndex;
    }

    return top;
  }

  sum() {
    const newHeap = this.heap.slice(1);
    return newHeap.reduce((prev, curr) => prev + curr ** 2, 0);
  }
}

function solution(n, works) {
  if (works.reduce((prev, curr) => prev + curr, 0) < n) return 0;

  const heap = new Heap();

  works.forEach(v => heap.push(v));

  for (let i = 0; i < n; i++) {
    heap.push(heap.pop() - 1);
  }

  return heap.sum();
}

/*
    뭔가 완전 탐색인데 전 값 기억하면서가는 dfs 백트래킹인줄 알았는데
    이런경우는 그리디 + maxHeap이 더 유리하구나ㅜㅜ
    네이버 2번 문제랑 똑같은데ㅜㅜㅜ
*/
