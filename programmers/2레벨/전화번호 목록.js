// 2025.03.24 14:20
// 14:41

// function solution(phoneBook) {
//   for (let i = 0; i < phoneBook.length; i++) {
//     for (let j = 0; j < phoneBook.length; j++) {
//       if (i === j) continue;
//       if (phoneBook[i] > phoneBook[j]) {
//         if (!phoneBook[i].slice(0, phoneBook[j].length) === phoneBook[j])
//           return false;
//       } else if (phoneBook[i] < phoneBook[j]) {
//         if (phoneBook[j].slice(0, phoneBook[i].length) === phoneBook[i])
//           return false;
//       }
//     }
//   }
//   return true;
// }

function solution(phoneBook) {
  phoneBook.sort(); // 문자열 기준 정렬 (O(N log N))

  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i + 1].startsWith(phoneBook[i])) {
      return false;
    }
  }

  return true;
}
