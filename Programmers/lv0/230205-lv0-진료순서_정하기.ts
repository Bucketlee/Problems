// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency: number[]) {
  const sortedEmergency = emergency.slice().sort((a, b) => b - a)
  return emergency.map((a) => sortedEmergency.indexOf(a) + 1)
}
