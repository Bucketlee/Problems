// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s.split(' ').map(str => str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str).join(' ');
}

console.log(solution("3people unFollowed me"));


// 다른이 풀이

function solution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}