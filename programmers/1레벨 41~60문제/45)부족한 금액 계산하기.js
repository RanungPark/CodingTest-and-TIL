function solution(price, money, count) {
  const sum = Array.from({ length: count })
    .map((_, i) => {
      return (i + 1) * price;
    })
    .reduce((prev, curr) => prev + curr, 0);
  return sum - money < 0 ? 0 : sum - money;
}
