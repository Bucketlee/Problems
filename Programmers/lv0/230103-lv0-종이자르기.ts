// https://school.programmers.co.kr/learn/courses/30/lessons/120922

function solution(M: number, N: number) {
  return M > N ? (M-1) + M*(N-1) : (N-1) + N*(M-1);
}


// 다른이풀이

function solution(M: number, N: number) {
  return M*N-1;
}
