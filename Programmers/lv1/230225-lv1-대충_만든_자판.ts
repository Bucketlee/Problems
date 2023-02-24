// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap: string[], targets: string[]) {
  return targets.map((target) => {
    let count = 0
    for (let i = 0; i < target.length; i += 1) {
      const s = target[i]
      const minIndex = keymap.reduce((min, key) => {
        const idx = key.indexOf(s)
        return idx !== -1 && idx < min ? idx : min
      }, 101)

      if (minIndex === 101) {
        return -1
      }

      count += minIndex + 1
    }

    return count
  })
}
