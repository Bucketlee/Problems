// https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n: number, numList: number[]) {
  return numList.filter((num) => num%n === 0);
}
