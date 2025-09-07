const fs = require('fs');

const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

for (let input of inputs) {
  if (input === '.' && input.length === 1) return;

  const stack = [];

  const result = input.replace(/[^()[\]]/g, '');

  for (let v of result) {
    if (!stack.length && (v === ')' || v === ']')) {
      stack.push(v);
      break;
    }
    if (v === '(' || v === '[') stack.push(v);
    else if (v === ')' && stack[stack.length - 1] === '(') stack.pop();
    else if (v === ']' && stack[stack.length - 1] === '[') stack.pop();
    else break;
  }

  console.log(!stack.length ? 'yes' : 'no');
}
