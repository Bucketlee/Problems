// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  if (a === b) {
    return a;
  }

  return (a + b)/2 * (b > a ? b - a + 1 : a - b + 1);
}


// 다른이 풀이

function adder(a, b){
  return (a+b)*(Math.abs(b-a)+1)/2;
}
