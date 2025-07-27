function solution(k, dungeons) {
  return quest(k, dungeons);
}

function quest(k, dungeons, count = 0, maxCount = { value: 0 }) {
  if (k < 0) return;

  maxCount.value = Math.max(maxCount.value, count);

  for (let i = 0; i < dungeons.length; i++) {
    const [required, cost] = dungeons[i];

    if (k >= required) {
      const remainingDungeons = [
        ...dungeons.slice(0, i),
        ...dungeons.slice(i + 1),
      ];
      quest(k - cost, remainingDungeons, count + 1, maxCount);
    }
  }

  return maxCount.value;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

// function solution(k, dungeons) {
//   let answer = 0;
//   const visit = Array.from({ length: dungeons.length }, () => false);

//   function dfs(rest, count) {
//     answer = Math.max(answer, count);

//     for (let i = 0; i < dungeons.length; i++) {
//       const [need, use] = dungeons[i];
//       if (!visit[i] && rest >= need) {
//         visit[i] = true;
//         dfs(rest - use, count + 1);
//         visit[i] = false;
//       }
//     }
//   }
//   dfs(k, 0);
//   return answer;
// }
