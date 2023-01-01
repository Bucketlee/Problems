// https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
  let result = '';
  for (let i = 0; i < my_string.length; i += 1) {
    result = my_string[i] + result;
  }
  return result;
}


// 다른이풀이

function solution(my_string) {
  return my_string.split('').reverse().join('');
}
