function solution(s) {
  let count = 0;
  let zeroCount = 0;
  let str = [...s];

  while (str.join('') !== '1') {
    const ones = str.filter(v => v === '1')
    zeroCount += str.length - ones.length;
    str = [...ones.join('').length.toString(2)];
    count++;
  }

  return [count, zeroCount];
}

// function solution(s) {
//   let count = 0;
//   let zeroCount = 0;
//   let str = s;

//   while (str !== '1') {
//     const ones = str.replace(/0/g, '');
//     zeroCount += str.length - ones.length;
//     str = ones.length.toString(2);
//     count++;
//   }

//   return [count, zeroCount];
// }