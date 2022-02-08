function solution(participant, completion) {
  let i;

  completion.sort();
  participant.sort();
  for (i = 0; i < completion.length; i++)
    if (participant[i] != completion[i]) break;
  return participant[i];
}
