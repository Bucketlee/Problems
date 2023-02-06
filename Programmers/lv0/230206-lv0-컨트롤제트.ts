// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s: string) {
  const arr = s.split(' ')
  return arr
    .map((numString, index) => {
      return numString === 'Z' ? -arr[index - 1] : +numString
    })
    .reduce((acc, cur) => acc + cur)
}

// 다른이 풀이

function solution(s: string) {
  const stack: number[] = []

  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop()
    else stack.push(+target)
  })

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0
}
