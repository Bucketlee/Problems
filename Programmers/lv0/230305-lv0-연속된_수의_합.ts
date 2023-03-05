// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num: number, total: number) {
  const standard = Math.ceil(total / num)
  const firstNumber = standard - Math.floor(num / 2)
  const result = []

  for (let i = 0; i < num; i += 1) {
    result.push(firstNumber + i)
  }

  return result
}

// 다른이 풀이

function solution(num: number, total: number) {
  var min = Math.ceil(total / num - Math.floor(num / 2))
  var max = Math.floor(total / num + Math.floor(num / 2))

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min
  })
}
