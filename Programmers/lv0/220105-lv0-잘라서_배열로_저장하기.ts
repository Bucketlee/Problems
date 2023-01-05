// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str: string, n: number) {
  const result = [];
  for (let i = 0; i < my_str.length; i += n) {
      result.push(my_str.slice(i, i+n));
  }

  return result;
}


// 다른이 풀이

function solution(my_str: string, n: number) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
