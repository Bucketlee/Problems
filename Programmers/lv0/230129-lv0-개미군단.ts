// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp: number) {
  const general = parseInt(`${hp / 5}`)
  const soldier = parseInt(`${(hp - general * 5) / 3}`)
  const worker = hp - general * 5 - soldier * 3

  return general + soldier + worker
}

// 다른이 풀이

function solution(hp: number) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3)
}
