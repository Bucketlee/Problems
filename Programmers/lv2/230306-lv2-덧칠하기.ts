// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n: number, m: number, section: number[]) {
  let lastSection = 0
  let count = 0
  section.forEach((num) => {
    if (lastSection <= num) {
      lastSection = num + m
      count += 1
    }
  })
  return count
}
