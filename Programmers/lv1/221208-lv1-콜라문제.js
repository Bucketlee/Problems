// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let count = 0;

  while (n >= a) {
    const newBottle = parseInt(n/a)*b;
    const remainingBottle = n%a;
    count += newBottle;
    n = newBottle + remainingBottle;
  }
  return count;
}


// 다른이 풀이

solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
