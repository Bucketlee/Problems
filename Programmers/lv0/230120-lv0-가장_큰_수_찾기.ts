// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array: number[]) {
  const max = Math.max(...array);
  const maxIndex = array.indexOf(max);
  return [max, maxIndex];
}
