const calcuGCD = (n, m) => {
  return n % m == 0 ? m : calcuGCD(m, n % m);
};

function solution(arr) {
  let gcd = calcuGCD(arr[0], arr[1]);
  let lcm = (arr[0] * arr[1]) / gcd;

  for (let i = 2; i < arr.length; i++) {
    gcd = calcuGCD(lcm, arr[i]);
    lcm = (lcm * arr[i]) / gcd;
  }
  return lcm;
}
