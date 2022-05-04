// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i += 1) {
    result += getNumOfDivisor(i)%2 === 0 ? i : -i ;
  }

  return result;
}

function getNumOfDivisor(num) {
  if (num === 1) return 1;

  let numOfDivisor = 2;
  for (let i = 2; i**2 < num; i += 1) {
    if (num%i === 0) numOfDivisor += 2;
  }

  if (num**(1/2)%1 === 0) numOfDivisor += 1;

  return numOfDivisor;
}

solution(1,1);


// 다른이 풀이

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
