function solution(s) {
  const left = ['(', '{', '['];

  if (!s.replace(/[\}\)\]]/g, '')) return 0;

  let index = s.length;
  const tmp = [...s];
  let result = 0;

  while (index) {
    const stack = [];
    for (let i = 0; i < tmp.length; i++) {
      if (left.includes(tmp[i])) {
        stack.push(tmp[i]);
        continue;
      }

      if (stack.length) {
        const last = stack[stack.length - 1];
        if (
          (last === '(' && tmp[i] === ')') ||
          (last === '{' && tmp[i] === '}') ||
          (last === '[' && tmp[i] === ']')
        ) {
          stack.pop();
        }
      }
    }

    if (stack.length === 0) result++;

    tmp.push(tmp.shift());

    index--;
  }

  return result;
}
