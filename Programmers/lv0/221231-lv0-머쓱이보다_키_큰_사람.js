// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  return array.reduce((count, h) => h > height ? count + 1 : count, 0);
}
