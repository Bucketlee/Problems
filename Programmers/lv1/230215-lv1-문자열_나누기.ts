// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s: string): number {
  let first = s[0]
  let countOfFirst = 0
  let countOfNotFirst = 0
  let result = 0

  for (let i = 0; i < s.length; i += 1) {
    if (first === s[i]) {
      countOfFirst += 1
    } else {
      countOfNotFirst += 1
    }

    if (countOfFirst === countOfNotFirst || i === s.length - 1) {
      first = s[i + 1]
      result += 1
      countOfFirst = 0
      countOfNotFirst = 0
    }
  }

  return result
}

// 다른이 풀이 1

function solution(s: string, count = 0) {
  if (!s) return count
  let [first, ...rest] = s.split('')
  let countSame = 1
  let countInSame = 0
  let i = 0
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++
    else countInSame++
    if (countSame === countInSame) break
  }
  return solution(rest.slice(i + 1).join(''), count + 1)
}

// 다른이 풀이 2

function solution(s: string): number {
  let answer = 0
  let current
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++
      current = s[i]
      count = 1
    } else {
      if (current !== s[i]) count--
      else count++
    }
  }

  return answer
}
