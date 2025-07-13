//2025-07-03 5:08
//완전탐색
function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  answers.forEach((v, i) => {
    if (first[i % first.length] === v) count[0]++;
    if (second[i % second.length] === v) count[1]++;
    if (third[i % third.length] === v) count[2]++;
  });

  const maxCount = Math.max(...count);

  const result = count
    .map((v, i) => {
      if (v === maxCount) return i + 1;
    })
    .filter(v => v);

  return result;
}


/**
 * function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = patterns.map(p =>
    answers.reduce((acc, answer, i) => acc + (answer === p[i % p.length] ? 1 : 0), 0)
  );

  const maxScore = Math.max(...scores);
  return scores.reduce((acc, score, i) => {
    if (score === maxScore) acc.push(i + 1);
    return acc;
  }, []);
}
 */