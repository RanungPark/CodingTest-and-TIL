// 9월19일 5시 30분 ~ 6시 20분

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const starts = [];

  /**
   * 시작단어의 인덱스 찾기
   */
  for (let [x] of board.entries()) {
    for (let [y, value] of board[x].entries()) {
      if (value === word[0]) {
        starts.push([x, y]);
      }
    }
  }

  /**
   * visit 모든 값에 false로 초기화
   */
  const resetVisit = () =>
    Array.from({ length: board.length }, () =>
      Array(board[0].length).fill(false)
    );

  let visit = [];

  const backtrack = (selectChar, [x, y]) => {
    if (result) return; // 이미 찾았다면 끝내야 불필요한 순회 막음

    visit[x][y] = true; // 왔던길 재방문 방지

    if (selectChar === word) {
      result = true;
      return;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= board.length || ny >= board[0].length)
        continue;

      if (word[selectChar.length] === board[nx][ny] && !visit[nx][ny]) {
        backtrack(selectChar + board[nx][ny], [nx, ny]);
      }
    }

    visit[x][y] = false; // 방문을 해제를 해여 한 경로가 막혔을 떄 그 칸을 다른 경로에서 다시 사용할 수 있음
  };

  starts.forEach(([x, y]) => {
    visit = resetVisit();
    backtrack(word[0], [x, y]);
  });

  console.log(result);
};

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCCED'
);

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'SEE'
);

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCB'
);

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'E', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCESEEEFS'
);
