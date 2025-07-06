function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  answers.forEach((v, i) => {
    const oneIndex = i % one.length;
    const twoIndex = i % two.length;
    const threeIndex = i % three.length;
    if (v === one[oneIndex]) count[0]++;
    if (v === two[twoIndex]) count[1]++;
    if (v === three[threeIndex]) count[2]++;
  });

  const max = Math.max(...count);
  const result = count
    .map((v, i) => (v === max ? i + 1 : null))
    .filter(v => v !== null);

  return result;
}
