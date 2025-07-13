function solution(maps) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const q = [[0, 0]];

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length)
        continue;
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }

  const result = maps[maps.length - 1][maps[0].length - 1];
  return result === 1 ? -1 : result;
}
