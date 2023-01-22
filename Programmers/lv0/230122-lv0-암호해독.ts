// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher: string, code: number) {
  let text = ''
  for (let i = code - 1; i < cipher.length; i += code) {
    text += cipher[i]
  }

  return text
}
