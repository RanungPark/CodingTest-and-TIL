function solution(n) {
  let start = 1;
  let end = 1;
  let sum = 0;
  let count = 0;

  while (start <= n) {
    if (sum < n) {
      sum += end;
      end++;
    } else if (sum > n) {
      sum -= start;
      start++;
    } else {
      count++;
      sum += end;
      end++;
    }
  }

  return count;
}
