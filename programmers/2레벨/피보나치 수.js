function solution(n) {
  let n0 = 0;
  let n1 = 1;
  let result = 0;

  for (let i = 1; i < n; i++) {
    result = (n0 + n1) % 1234567;
    n0 = n1;
    n1 = result;
  }
  return result;
}
