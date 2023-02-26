// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(
  numer1: number,
  denom1: number,
  numer2: number,
  denom2: number,
) {
  const denom = denom1 * denom2
  const numer = numer1 * denom2 + numer2 * denom1

  return getGreatestCommonFactor(numer, denom)
}

function getGreatestCommonFactor(
  numer: number,
  denom: number,
): [number, number] {
  const min = numer > denom ? numer : denom

  for (let i = 2; i <= min; i += 1) {
    if (numer % i === 0 && denom % i === 0) {
      return getGreatestCommonFactor(numer / i, denom / i)
    }
  }

  return [numer, denom]
}

// 다른이 풀이

function fnGCD(a: number, b: number): number {
  return a % b ? fnGCD(b, a % b) : b
}

function solution(
  numer1: number,
  denom1: number,
  numer2: number,
  denom2: number,
) {
  let denum = denom1 * numer2 + denom2 * numer1
  let num = numer1 * numer2
  let gcd = fnGCD(denum, num) //최대공약수

  return [denum / gcd, num / gcd]
}
