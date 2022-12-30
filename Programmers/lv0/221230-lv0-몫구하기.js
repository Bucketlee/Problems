// https://school.programmers.co.kr/learn/courses/30/lessons/120805

function solution(num1, num2) {
  return (num1 - num1%num2) / num2;
}


// 다른이풀이

function solution(num1, num2) {
  return parseInt(num1 / num2);
}
