//2025-07-03 5:31

function solution(s) {
  let result = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let prev = s.slice(0, i);
    let combination = '';
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      const curr = s.slice(j, j + i);

      if (prev === curr) {
        count++;
      } else {
        combination += (count > 1 ? count : '') + prev;
        prev = curr;
        count = 1;
      }
    }

    combination += (count > 1 ? count : '') + prev;

    result = Math.min(result, combination.length);
  }

  return result;
}
