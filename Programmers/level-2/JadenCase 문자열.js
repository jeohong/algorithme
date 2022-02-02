function solution(s) {
  return s
    .split(' ')
    .map((item) => {
      if (item !== '')
        return item[0].toUpperCase() + item.substr(1).toLowerCase();
    })
    .join(' ');
}
