// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n: number): number {
  let next = n + 1
  while (
    next.toString(2).split('1').length !== n.toString(2).split('1').length
  ) {
    next += 1
  }

  return next
}
