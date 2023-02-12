// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s: string, skip: string, index: number) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const allowedAlphabet = alphabet.filter((al) => !skip.includes(al))
  const changedS = s.split('').map((str) => {
    const idx = (allowedAlphabet.indexOf(str) + index) % allowedAlphabet.length
    return allowedAlphabet[idx]
  })

  return changedS.join('')
}

// 다른이 풀이

function solution(s: string, skip: string, index: number) {
  let ans = ''
  const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
    new RegExp(`[^${skip}]`, 'g'),
  )
  if (!matched) {
    return
  }
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index
    ans += matched[newIdx % matched.length]
  }
  return ans
}
