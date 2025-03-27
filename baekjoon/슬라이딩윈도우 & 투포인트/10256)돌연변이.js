// 2025.03.27 11.19
// 12.08

const fs = require('fs');

const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const testCase = +input.shift();

/**
 * 마커의 모든 가능한 돌연변이를 생성하는 함수
 * @param {string} marker
 * @returns {Set<string>}
 */
function generateMutations(marker) {
  const markSet = new Set();
  const m = marker.length;

  // 마커를 세 부분으로 나누는 모든 경우의 수
  for (let i = 0; i <= m; i++) {
    for (let j = i; j <= m; j++) {
      const left = marker.slice(0, i);
      const mid = marker.slice(i, j).split('').reverse().join('');
      const right = marker.slice(j, m);
      markSet.add(left + mid + right);
    }
  }

  return markSet;
}

for (let t = 0; t < testCase; t++) {
  const [n, m] = input.shift().split(' ').map(Number);
  const DNA = input.shift();
  const mark = input.shift();

  const mutations = generateMutations(mark);
  let count = 0;

  // DNA 내에서 길이 m의 부분 문자열을 검사 (슬라이딩 윈도우)
  for (let i = 0; i <= n - m; i++) {
    const subStr = DNA.slice(i, i + m);
    if (mutations.has(subStr)) {
      count++;
    }
  }

  console.log(count);
}
