// https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a: number, b: number) {
  let [_, denominator] = getIrreducibleFraction(a, b)

  while (denominator > 1) {
    if (denominator % 2 === 0) {
      denominator = denominator / 2
    } else if (denominator % 5 === 0) {
      denominator = denominator / 5
    } else {
      return 2
    }
  }
  return 1
}

function getIrreducibleFraction(
  numerator: number,
  denominator: number,
): [number, number] {
  const min = numerator > denominator ? denominator : numerator
  for (let i = 2; i <= min; i += 1) {
    if (numerator % i === 0 && denominator % i === 0) {
      return getIrreducibleFraction(numerator / i, denominator / i)
    }
  }

  return [numerator, denominator]
}

// 다른이 풀이

function solution(a: number, b: number) {
  let n = 1
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i
  }

  b /= n
  while (b % 2 === 0) b /= 2
  while (b % 5 === 0) b /= 5

  return b === 1 ? 1 : 2
}
