// https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let primeNums = 0;

  for (let i = 2; i <= n; i += 1) {
    if (checkPrimeNumber(i)) {
      primeNums += 1;
    }
  }

  return primeNums;
}

function checkPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i**2 <= num; i += 1) {
    if (num%i === 0) {
      return false;
    }
  }

  return true;
}


// 다른이 풀이

function solution(n) {
  const s = new Set();
  for(let i=1; i<=n; i+=2){
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for(let j=3; j<Math.sqrt(n); j++){
    if(s.has(j)){
      for(let k=j*2; k<=n; k+=j){
        s.delete(k);
      }
    }
  }
  return s.size;
}
