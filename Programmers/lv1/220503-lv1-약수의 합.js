// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let result = n;
  for (let i = 1; i <= n/2; i += 1) {
    if (n%i === 0) {
      result += i;
    }
  }

  return result;
}
