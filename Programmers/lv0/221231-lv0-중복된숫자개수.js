// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  return array.reduce((duplication, num) => num === n ? duplication + 1 : duplication, 0);
}
