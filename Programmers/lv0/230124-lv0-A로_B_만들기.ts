// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before: string, after: string) {
  const target = countStringOccurrences(before)
  const comparison = countStringOccurrences(after)

  const keys = Object.keys(target)
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    if (!comparison[key] || target[key] !== comparison[key]) {
      return 0
    }
  }
  return 1
}

function countStringOccurrences(string: string) {
  const str: { [key: string]: number } = {}
  for (let i = 0; i < string.length; i += 1) {
    const target = string[i]
    if (!str[target]) {
      str[target] = 0
    }

    str[target] += 1
  }
  return str
}

// 다른이 풀이

function solution(before: string, after: string) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0
}
