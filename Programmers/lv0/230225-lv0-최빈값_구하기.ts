// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array: number[]) {
  const sortedArray = array.slice().sort((a, b) => b - a)

  let value = -1
  let countOfValue = 0

  let currentIndex = 0
  for (let i = 0; i < sortedArray.length; i += 1) {
    const target = sortedArray[i]
    if (target !== sortedArray[i + 1]) {
      const countOfTarget = i + 1 - currentIndex
      if (countOfValue === countOfTarget) {
        value = -1
      } else if (countOfValue < countOfTarget) {
        value = target
        countOfValue = countOfTarget
      }
      currentIndex = i + 1
    }
  }

  return value
}

// 다른이 풀이

function solution(array: number[]) {
  let m: any = new Map()
  for (let n of array) m.set(n, (m.get(n) || 0) + 1)
  m = [...m].sort((a, b) => b[1] - a[1])
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1
}
