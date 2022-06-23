// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  return [ getGreatestCommonDivisor(n, m), getLeastCommonMultiple(n, m) ];
}

function getGreatestCommonDivisor(n, m) {
  const min = n > m ? m : n;
  for (let i = min; i > 1; i -= 1) {
    if (n%i === 0 && m%i === 0) {
      return i;
    }
  }

  return 1;
}

function getLeastCommonMultiple(n, m) {
  const min = n > m ? n : m;
  const max = n*m;
  for (let i = min; min < max; i += 1) {
    if (i%n === 0 && i%m === 0) {
      return i;
    }
  }

  return max;
}


// 다른이 풀이 1

function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}


// 다른이 풀이 2

function gcdlcm(a, b) {
  var r;
  for(var ab= a*b;r = a % b;a = b, b = r){}
  return [b, ab/b];
}
