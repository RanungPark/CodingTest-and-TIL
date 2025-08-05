function solution(operations) {
  let arr = [];

  for (const op of operations) {
    const [cmd, val] = op.split(' ');

    if (cmd === 'I') {
      arr.push(Number(val));
    } else if (arr.length) {
      if (val === '1') {
        arr.splice(arr.indexOf(Math.max(...arr)), 1);
      } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
      }
    }
  }

  return arr.length ? [Math.max(...arr), Math.min(...arr)] : [0, 0];
}
