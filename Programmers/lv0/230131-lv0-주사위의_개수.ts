// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box: number[], n: number) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  )
}
