// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1: string[], cards2: string[], goal: string[]) {
  for (let i = 0; i < goal.length; i += 1) {
    const target = goal[i]
    if (target === cards1[0]) {
      cards1.shift()
      continue
    }

    if (target === cards2[0]) {
      cards2.shift()
      continue
    }

    return 'No'
  }

  return 'Yes'
}
