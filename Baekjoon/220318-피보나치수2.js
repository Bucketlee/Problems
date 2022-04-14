// https://www.acmicpc.net/problem/2748

function 피보나치수(N) {

  if (N === 0) return 0;
  if (N === 1) return 1;

  let first = 0;
  let second = 1;
  let n = 2;
  let isFirstChange = true;
  let newNum = 0;

  while (N >= n) {
    newNum = first + second;

    if (isFirstChange) {
      first = newNum;
    } else {
      second = newNum;
    }

    isFirstChange = !isFirstChange;
    console.log(n, first, second, newNum);
    n += 1;
  }

  return newNum;
}

console.log(피보나치수(10));