function solution(n, edge) {
  const visit = Array(n + 1).fill(-1);
  const maps = Array.from({ length: n + 1 }, () => []);

  edge.forEach(([start, end]) => {
    maps[start].push(end);
    maps[end].push(start);
  });

  const queue = [1];
  visit[1] = 0;

  while (queue.length) {
    const curr = queue.shift();
    for (const next of maps[curr]) {
      if (visit[next] === -1) {
        visit[next] = visit[curr] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visit);
  return visit.filter(v => v === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
