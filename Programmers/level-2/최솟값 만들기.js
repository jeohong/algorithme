function solution(A, B) {
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => a - b).reverse();
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i] * b[i];
  }
  return sum;
}
