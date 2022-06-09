// https://programmers.co.kr/learn/courses/30/lessons/68935

// toString 이용

function solution(n) {
  return parseInt([ ...n.toString(3) ].reverse().join(''), 3);
}


// toString 이용하지 않은 풀이

function solution(n) {
  const ternary = numberToTernaryArr(n);
  const reverse = ternary.reverse();
  const value = ternaryArrToNumber(reverse);
  return value;
}

function numberToTernaryArr(num) {
  if (typeof(num) !== 'number') {
    return [];
  }

  let arr = [];

  while (num > 2) {
    const remainder = num%3;
    arr.unshift(remainder);
    num = (num- remainder)/3;
  }

  arr.unshift(num);

  return arr;
}


function ternaryArrToNumber(ternaryArr) {
  if (!Array.isArray(ternaryArr)) {
    return 0;
  }

  const len = ternaryArr.length;

  let num = 0;
  for (let i = 0; i < len; i += 1) {
    const target = ternaryArr[len-1-i];
    num += target*(3**i);
  }

  return num;
}


// 다른이 풀이

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
