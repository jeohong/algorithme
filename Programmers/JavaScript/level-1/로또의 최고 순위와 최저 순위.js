function solution(lottos, win_nums) {
  let count = 0;
  let point = [];

  for (let i = 0; i < win_nums.length; i++) {
    if (lottos.indexOf(win_nums[i]) != -1) count++;
  }
  point.push(count < 2 ? 6 : 7 - count);

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      count++;
    }
  }
  point.push(count < 2 ? 6 : 7 - count);
  return point.sort((a, b) => a - b);
}
