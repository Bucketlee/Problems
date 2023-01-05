// https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string: string) {
  return my_string.toLowerCase().split('').sort((a, b) => a > b ? 1 : -1).join('');
}
