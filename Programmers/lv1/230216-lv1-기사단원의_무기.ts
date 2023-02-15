// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number: number, limit: number, power: number) {
  let i = 0
  return Array(number)
    .fill(i)
    .reduce((sum, _) => {
      i += 1
      const countOfDivisor = getDivisor(i).length
      return sum + (countOfDivisor > limit ? power : countOfDivisor)
    }, 0)
}

function getDivisor(number: number) {
  const divisor: number[] = []

  if (number < 1) {
    return divisor
  }

  for (let i = 1; i ** 2 <= number; i += 1) {
    if (number % i === 0) {
      if (number === i ** 2) {
        divisor.push(number)
      } else {
        divisor.push(i, number / i)
      }
    }
  }

  divisor.sort((a, b) => a - b)

  return divisor
}

// 다른이 풀이

function solution(number: number, limit: number, power: number) {
  var answer = 0
  for (let n = 1; n <= number; n++) {
    let count = 0
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++
      else if (n % j == 0) count += 2
    }
    if (count > limit) count = power
    answer += count
  }
  return answer
}
