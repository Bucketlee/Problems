// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  const sum = numbers.reduce((sum, num) => sum + num);
  return sum / numbers.length;
}
