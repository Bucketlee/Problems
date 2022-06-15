// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  let str = '';
  for (let i = 1; i <= n/2; i += 1) {
    str += '수박';
  }

  return n%2 === 0 ? str : str + '수';
}

const waterMelon = n => {
  return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}
