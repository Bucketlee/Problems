// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const count = parseInt(money/5500);
  return [count, money - count*5500];
}


// 다른이풀이

function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}
