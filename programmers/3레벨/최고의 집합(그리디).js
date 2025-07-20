function solution(n, s) {
  if (s < n) return [-1];

  const base = Math.floor(s / n);
  const extra = s % n;

  const answer = Array(n).fill(base);
  for (let i = n - 1; i >= n - extra; i--) {
    answer[i]++;
  }

  return answer;
}
