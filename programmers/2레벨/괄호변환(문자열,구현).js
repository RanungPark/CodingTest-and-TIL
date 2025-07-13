function isCorrect(str) {
  const stack = [];
  for (const ch of str) {
    if (ch === '(') {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

function solution(p) {
  if (p === '') return '';

  let balance = 0,
    idx = 0;
  do {
    balance += p[idx] === '(' ? 1 : -1;
    idx++;
  } while (balance !== 0);

  const u = p.slice(0, idx);
  const v = p.slice(idx);

  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    let temp = '(' + solution(v) + ')';
    let reversed = '';
    for (let i = 1; i < u.length - 1; i++) {
      reversed += u[i] === '(' ? ')' : '(';
    }
    return temp + reversed;
  }
}

// function solution(p) {
//   if (!p.length) return '';
//   let u = '';
//   let v = '';

//   let count1 = 0;
//   let count2 = 0;
//   const stack = [];

//   for (let i = 0; i < p.length; i++) {
//     if (p[i] === '(') {
//       stack.push(true);
//       count1++;
//     } else {
//       stack.pop();
//       count2++;
//     }
//     if (count1 === count2) {
//       u = p.slice(0, i + 1);
//       v = p.slice(i + 1, p.length);
//       break;
//     }
//   }

//   if (stack.length === 0) {
//     return u + solution(v);
//   } else {
//     let result = '(' + solution(v) + ')';
//     u = u.slice(1, -1);
//     let u2 = '';
//     for (let i = 0; i < u.length; i++) {
//       if (u[i] === '(') {
//         u2 += ')';
//       } else {
//         u2 += '(';
//       }
//     }
//     result += u2;
//     return result;
//   }
// }

function solution(p) {
  if (p === '') return '';

  let u = '';
  let v = '';

  let count1 = 0;
  let count2 = 0;
  const stack = [];

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      count1 += 1;
      stack.push(true);
    } else {
      count2 += 1;
      stack.pop();
    }

    if (count1 === count2) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);
      break;
    }
  }

  if (stack.length === 0) {
    return u + solution(v);
  } else {
    let result = '(' + solution(v) + ')';
    let reversed = '';

    for (let i = 1; i < u.length - 1; i++) {
      if (u[i] === '(') {
        reversed += ')';
      } else reversed += '(';
    }
    return result + reversed;
  }
}
