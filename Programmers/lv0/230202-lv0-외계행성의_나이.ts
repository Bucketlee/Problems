// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age: number) {
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

  const ageString = age + ''
  let alphabetAge = ''
  for (let i = 0; i < ageString.length; i += 1) {
    alphabetAge += alphabet[+ageString[i]]
  }
  return alphabetAge
}

// 다른이 풀이

function solution(age: number) {
  return age
    .toString()
    .split('')
    .map((v) => 'abcdefghij'[+v])
    .join('')
}
