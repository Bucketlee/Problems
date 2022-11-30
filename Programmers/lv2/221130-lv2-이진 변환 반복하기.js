// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let binaryNumber = s;
  let countOfRemovedZero = 0;
  let repeat = 0;

  while (binaryNumber !== '1') {
    const len = binaryNumber.length;
    const stringOfRemovedZero = binaryNumber.replaceAll('0', '');
    const newStringLen = stringOfRemovedZero.length;

    countOfRemovedZero += len - newStringLen;
    binaryNumber = newStringLen.toString(2)
    repeat += 1;
  }

  return [repeat, countOfRemovedZero]
}


// 다른이 풀이

function solution(s) {
  var answer = [0,0];
  while(s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g)||[]).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}
