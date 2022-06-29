// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  const result = arr.reduce((acc, cur) => (acc * cur) / getGcd(acc, cur));
  return result;
}


function getGcd(a, b) {
if (b === 0) {
    return a;
}
return getGcd(b, a % b);
}
