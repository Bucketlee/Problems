// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string: string) {
  let sum = 0
  for (let i = 0; i < my_string.length; i += 1) {
    const target = my_string[i]
    if (Number(target)) {
      sum += +target
    }
  }

  return sum
}

// 다른이 풀이

function solution(my_string: string) {
  const answer = my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0)
  return answer
}
