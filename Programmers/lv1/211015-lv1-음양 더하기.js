// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let answer = absolutes.reduce((acc, cuu, i) => {
    if (!signs[i]) {
      cuu = -cuu;
    }
    return acc + cuu;
  }, 0);

  return answer;
}


// 다른이 풀이

function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
