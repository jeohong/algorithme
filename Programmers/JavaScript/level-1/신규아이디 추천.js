function solution(new_id) {
  const changeId = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return changeId.padEnd(3, changeId[changeId.length - 1]);
}
