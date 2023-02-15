// https://school.programmers.co.kr/learn/courses/30/lessons/118666

type Survey = 'RT' | 'TR' | 'CF' | 'FC' | 'JM' | 'MJ' | 'AN' | 'NA'

function solution(survey: Survey[], choices: number[]) {
  const mbti: { [key: string]: number } = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  }

  const score = [3, 2, 1, 0, 1, 2, 3]

  survey.forEach((s, i) => {
    const selected = choices[i]
    if (selected < 4) {
      const type = s[0]
      mbti[type] += score[selected - 1]
    } else if (selected > 4) {
      const type = s[1]
      mbti[type] += score[selected - 1]
    }
  })

  const first = mbti.R >= mbti.T ? 'R' : 'T'
  const second = mbti.C >= mbti.F ? 'C' : 'F'
  const third = mbti.J >= mbti.M ? 'J' : 'M'
  const fourth = mbti.A >= mbti.N ? 'A' : 'N'

  return first + second + third + fourth
}

// 다른이 풀이

function solution(survey: Survey[], choices: number[]) {
  const MBTI: { [key: string]: number } = {}
  const types = ['RT', 'CF', 'JM', 'AN']

  types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)))

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index]

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4)
  })

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('')
}
