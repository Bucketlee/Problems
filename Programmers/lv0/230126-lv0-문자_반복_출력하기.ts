// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string: string, n: number) {
  let result = ''
  for (let i = 0; i < my_string.length; i += 1) {
    result += my_string[i].repeat(n)
  }
  return result
}
