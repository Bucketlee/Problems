// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  return numbers.map(num => {
    const binaryNum = num.toString(2);
    const len = binaryNum.length;
    const lastZeroIdx = binaryNum.lastIndexOf('0');

    const backNum = len - lastZeroIdx === 1 ? '1' : '10' + '1'.repeat(len - lastZeroIdx - 2);
    const newBinaryNum = binaryNum.slice(0, lastZeroIdx === -1 ? 0 : lastZeroIdx) + backNum;

    return parseInt(newBinaryNum, 2);
  });
}


// 다른이 풀이

function solution(numbers) {
  var answer = [];
  let c;
  numbers.forEach(v => {
    if (v < 2 || v % 2 === 0) {
        answer.push(v+1);
    } else {
      let c = 2;
      while(true) {
        if ((v + 1) % (c * 2) === 0) {
          c = c * 2;
        } else {
          break;
        }
      };
      answer.push(v + (c / 2));
    }
  });
  return answer;
}
