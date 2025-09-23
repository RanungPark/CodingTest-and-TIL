const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input.shift();
const m = +input.shift();

const costs = input.map(n => n.split(' ').map(Number));

const [start, end] = costs.pop();

const graph = Array.from({ length: n + 1 }, () => []);

for (let [src, dest, cost] of costs) {
  graph[src].push({ next: dest, cost });
  graph[dest].push({ next: src, cost });
}

const visited = Array(n + 1).fill(false);

visited[0] = true;
visited[start] = true;

let edges = [...graph[start]];

let count = 0;
let answer = 0;
const roads = [start];

while (count < n - 1) {
  edges.sort((a, b) => a.cost - b.cost);
  const { next, cost } = edges.shift();

  if (next === end) break;
  if (visited[next]) continue;

  visited[next] = true;
  roads.push(next);
  answer += cost;
  count++;

  for (const edge of graph[next]) {
    if (!visited[edge.next]) {
      edges.push(edge);
    }
  }
}

console.log(count, answer, roads);
