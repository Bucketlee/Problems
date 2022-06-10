// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const binary1 = arr1.map(num => numToBinaryNumArr(num, n));
  const binary2 = arr2.map(num => numToBinaryNumArr(num, n));

  const result = [];
  for (let i = 0; i < n; i += 1) {
    let str = '';

    for (let j = 0; j < n; j += 1) {
      const target1 = binary1[i][j];
      const target2 = binary2[i][j];
      if (target1 === 0 && target2 === 0) {
        str += ' ';
      } else {
        str += '#';
      }
    }

    result.push(str);
  }
  return result;
}

function numToBinaryNumArr(num, n) {
  if (num === 0) {
    return new Array(n).fill(0);
  }
  let binaryNum = [];

  while (num > 2) {
    const remainder = num%2;
    binaryNum.unshift(remainder);
    num = (num-remainder)/2;
  }

  if (num === 1) {
    binaryNum.unshift(1);
  } else {
    binaryNum.unshift(1, 0);
  }

  const len = binaryNum.length;
  for (let i = len; i < n; i += 1) {
    binaryNum.unshift(0);
  }

  return binaryNum;
}


numToBinaryNumArr(2);
numToBinaryNumArr(10);


// 다른이 풀이

function solution(n, arr1, arr2) {
  return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
}
