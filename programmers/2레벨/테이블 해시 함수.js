// 2025.03.24 10:38
// 11:10

function solution(data, col, row_begin, row_end) {
  const colMap = data.map((v, i) => ({
    first: v[0],
    value: v[col - 1],
    index: i,
  }));
  const colSort = colMap.sort((a, b) => {
    if (a.value === b.value) {
      return b.first - a.first; // first 기준 내림차순
    }
    return a.value - b.value; // value 기준 오름차순
  });
  const changeData = colSort.map(v => data[v.index]);

  let tmp = [];
  let index = 0;
  for (let i = row_begin - 1; i < row_end; i++) {
    tmp[index] = 0;
    for (let j = 0; j < changeData[i].length; j++) {
      tmp[index] += changeData[i][j] % (i + 1);
    }
    index++;
  }

  const result = tmp.reduce((acc, cur) => acc ^ cur, 0);
  return result;
}
