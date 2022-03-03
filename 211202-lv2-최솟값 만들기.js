// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A,B){
  var answer = 0;

  A.sort((a, b) => a-b);
  B.sort((a, b) => b-a);

  for (let i = 0; i < A.length; i = i+1) {
      answer = answer + A[i]*B[i];
  }

  return answer;
}

// 다른이풀이
function solution(A,B){
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)
  return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
