// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n)
{
  let count = 0;
  while (n >= 1) {
    if (n%2 !== 0) {
      n -= 1;
      count += 1;
    }

    n = n/2;
  }

  return count;
}


// 다른이 풀이 : 2진수로 풀이

function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}
