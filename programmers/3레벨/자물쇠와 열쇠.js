function solution(key, lock) {
  const m = key.length;
  const n = lock.length;

  const rotate90 = arr => {
    const size = arr.length;
    const rotated = Array.from({ length: size }, () => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        rotated[j][size - 1 - i] = arr[i][j];
      }
    }
    return rotated;
  };

  const check = (sx, sy, keyMat) => {
    const pad = m - 1;
    const size = n + pad * 2;

    const board = Array.from({ length: size }, () => Array(size).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        board[i + pad][j + pad] = lock[i][j];
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        const bx = sx + i;
        const by = sy + j;
        if (bx < 0 || by < 0 || bx >= size || by >= size) continue;
        board[bx][by] += keyMat[i][j];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i + pad][j + pad] !== 1) return false;
      }
    }
    return true;
  };

  let curKey = key;
  const maxOffset = n + m - 1;
  for (let r = 0; r < 4; r++) {
    for (let sx = 0; sx < maxOffset; sx++) {
      for (let sy = 0; sy < maxOffset; sy++) {
        if (check(sx, sy, curKey)) return true;
      }
    }
    curKey = rotate90(curKey);
  }

  return false;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);

/*
 *
 * 1) key를 4방 회전(0,90,180,270)으로 시도
 * 2) 각 회전에 대해 확장된 보드(자물쇠를 가운데 두고 패딩 추가)에서
 *    key를 가능한 모든 오프셋에 놓아본다.
 * 3) 키를 더했을 때 자물쇠 영역의 모든 값이 정확히 1이면 성공
 */
