/*
문제 설명
    두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
    1 ≤ left ≤ right ≤ 1,000

입출력 예
    left	right	result
    13  	17  	43
    24  	27  	52
*/
function solution(left, right) {
  let sum = 0;

  for (let num = left; num <= right; num++) {
    if (primeCount(num)) sum += num;
    else sum -= num;
  }
  return sum;
}

function primeCount(n) {
  let prime = [];

  if (n % Math.sqrt(n) === 0) {
    prime.push(Math.sqrt(n));
  }

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      prime.push(i);
      prime.push(n / i);
    }
  }
  return prime.length % 2 === 0;
}
