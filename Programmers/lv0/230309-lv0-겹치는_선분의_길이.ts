// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines: [number, number][]) {
  const count: { [key: string]: number } = {}
  for (let i = 0; i < lines.length; i += 1) {
    const [start, end] = lines[i]
    for (let j = start; j < end; j += 1) {
      if (!count[j]) {
        count[j] = 0
      }
      count[j] += 1
    }
  }

  const values = Object.values(count)

  return values.filter((value) => value > 1).length
}

// 다른이 풀이

function solution(lines: [number, number][]) {
  let line = new Array(200).fill(0)

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++
  })

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0)
}
