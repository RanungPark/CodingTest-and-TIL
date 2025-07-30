function solution(A, B) {
  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => a - b);

  let wins = 0;
  let bIndex = 0;

  for (let a of sortA) {
    while (bIndex < sortB.length && a >= sortB[bIndex]) {
      bIndex++;
    }

    if (bIndex < sortB.length) {
      wins++;
      bIndex++;
    }
  }

  return wins;
}

/**
 * 오름차순으로 정렬하는 이유는 값이 작은컷부터 이겨 이길수 있는 카드를 사용할 수 있도록 하기 위해 오름차순으로 정렬해서 사용한다
 */