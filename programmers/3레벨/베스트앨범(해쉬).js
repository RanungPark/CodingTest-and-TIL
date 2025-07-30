function solution(genres, plays) {
  const obj = {};

  genres.forEach((v, i) => {
    if (!obj[v]) {
      obj[v] = [{ value: plays[i], index: i }];
    } else {
      obj[v] = [...obj[v], { value: plays[i], index: i }];
    }
  });

  const sumobj = {};
  for (let key in obj) {
    sumobj[key] = obj[key].reduce((prev, curr) => prev + curr.value, 0);
  }

  const sortedGenres = Object.entries(sumobj).sort((a, b) => b[1] - a[1]);

  const result = [];

  sortedGenres.forEach(([genre]) => {
    const songs = obj[genre];
    songs.sort((a, b) => b.value - a.value || a.index - b.index);
    songs.slice(0, 2).forEach(song => result.push(song.index));
  });

  return result;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
