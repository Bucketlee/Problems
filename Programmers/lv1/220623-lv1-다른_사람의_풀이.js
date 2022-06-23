// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  for (let i = 2; i**2 <= n; i += 1) {
    if (i**2 === n) {
      return (i+1)**2;
    }
  }
  return -1;
}


// 다른이 풀이

function nextSqaure(n){
  //함수를 완성하세요
  switch(n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no"
  }
}
