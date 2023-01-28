// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }
  let result = '';
  for (let i = 0; i < my_string.length; i += 1) {
    if (!vowel[my_string[i]]) {
      result += my_string[i];
    }
  }
  return result;
}


// 다른이 풀이

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
