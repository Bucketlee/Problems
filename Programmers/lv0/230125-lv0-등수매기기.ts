// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score: [number, number][]) {
  const averages = score.map(([english, math]) => (english + math) / 2)
  const sortedAverages = averages.slice().sort((a, b) => b - a)

  const rank: { [key: string]: number } = {}
  sortedAverages.forEach((average, i) => {
    if (!rank[average]) {
      rank[average] = i + 1
    }
  })

  return averages.map((average) => rank[average])
}

// 다른이 풀이

function solution(score: [number, number][]) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    )
  })
}
