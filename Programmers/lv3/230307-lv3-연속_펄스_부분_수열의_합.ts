// https://school.programmers.co.kr/learn/courses/30/lessons/161988

function solution(sequence: number[]) {
  let max = sequence[0] > 0 ? sequence[0] : sequence[0] * -1
  const sequenceOfPulse = sequence.map((num, i) =>
    i % 2 === 0 ? num : num * -1,
  )
  const sequenceOfReverse = sequence.map((num, i) =>
    i % 2 === 0 ? num * -1 : num,
  )

  for (let i = 1; i < sequenceOfPulse.length; i += 1) {
    if (
      sequenceOfPulse[i - 1] > 0 &&
      sequenceOfPulse[i - 1] + sequenceOfPulse[i] > 0
    ) {
      sequenceOfPulse[i] += sequenceOfPulse[i - 1]
    }

    if (max < sequenceOfPulse[i]) {
      max = sequenceOfPulse[i]
    }

    if (
      sequenceOfReverse[i - 1] > 0 &&
      sequenceOfReverse[i - 1] + sequenceOfReverse[i] > 0
    ) {
      sequenceOfReverse[i] += sequenceOfReverse[i - 1]
    }

    if (max < sequenceOfReverse[i]) {
      max = sequenceOfReverse[i]
    }
  }
  return max
}

// 다른이 풀이

function solution(sequence: number[]) {
  let m = 0,
    M = 0
  let acc = m

  for (let i = 0; i < sequence.length; i++) {
    acc = i % 2 == 1 ? acc - sequence[i] : acc + sequence[i]
    M = Math.max(M, acc)
    m = Math.min(m, acc)
  }
  return M == m ? M : M - m
}
