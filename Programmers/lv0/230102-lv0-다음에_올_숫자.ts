// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common: number[]) {
  if (common.length < 3) {
    return;
  }

  const diff1 = common[1] - common[0];
  const diff2 = common[2] - common[1];

  if (diff1 === diff2) {
    return common[common.length-1] + diff1;
  } else {
    return common[common.length-1]*(diff2/diff1);
  }
}
