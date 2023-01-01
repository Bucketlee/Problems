// https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list) {
  const result = [];
  num_list.forEach((num) => result.unshift(num));
  return result;
}


// 다른이풀이

function solution(num_list) {
  return num_list.reverse()
}
