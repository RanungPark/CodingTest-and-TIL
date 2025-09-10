function solution(n, costs) {
  let answer = 0;

  const graph = Array.from({ length: n }, () => []);
  for (let [src, dest, cost] of costs) {
    graph[src].push({ next: dest, cost });
    graph[dest].push({ next: src, cost });
  }

  const visited = Array(n).fill(false);
  visited[0] = true;

  let edges = [...graph[0]];

  let count = 0;
  while (count < n - 1) {
    edges.sort((a, b) => a.cost - b.cost);
    const { next, cost } = edges.shift();

    if (visited[next]) continue;

    visited[next] = true;
    answer += cost;
    count++;

    for (const edge of graph[next]) {
      if (!visited[edge.next]) {
        edges.push(edge);
      }
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
