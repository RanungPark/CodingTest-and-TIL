function solution(n) {
  const one = [...n.toString(2)].filter(v => v === '1').length;

  let next = n + 1;

  while (1) {
    let next_one = [...next.toString(2)].filter(v => v === '1').length;
    if (next_one === one) return next;
    next++;
  }
}
