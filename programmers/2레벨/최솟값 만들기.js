function solution(A, B) {
  const aSort = A.sort((a, b) => a - b);
  const bSort = B.sort((a, b) => b - a);

  return aSort
    .map((v, i) => v * bSort[i])
    .reduce((prev, curr) => prev + curr, 0);
}
