//2025.03.25 01:19
// 02:00

function solution(fees, records) {
  const [baseTime, basePay, time, pay] = fees;

  const recordsObj = {};

  records.forEach(v => {
    const [time, cord, state] = v.split(' ');

    if (!recordsObj[cord]) recordsObj[cord] = [];
    recordsObj[cord].push({
      time,
      state,
    });
  });

  return Object.keys(recordsObj)
    .map(key => {
      let length = recordsObj[key].length;
      let time = 0;

      if (length % 2 === 1) {
        length++;
        recordsObj[key].push({
          time: '23:59',
          state: 'OUT',
        });
      }

      const timeNumbers = recordsObj[key].map(({ time }) => {
        const [hour, minute] = time.split(':').map(Number);
        return { hour, minute };
      });

      for (let i = 0; i < length; i += 2) {
        time +=
          timeNumbers[i + 1].hour * 60 +
          timeNumbers[i + 1].minute -
          (timeNumbers[i].hour * 60 + timeNumbers[i].minute);
      }

      return { key, time };
    })
    .sort((a, b) => a.key - b.key)
    .map(v => v.time)
    .map(v => {
      if (v > baseTime) {
        return basePay + Math.ceil((v - baseTime) / time) * pay;
      } else return basePay;
    });
}
