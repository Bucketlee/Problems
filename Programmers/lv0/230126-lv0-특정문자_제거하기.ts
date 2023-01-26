// https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string: string, letter: string) {
  // return my_string.replaceAll(letter, '')
}

// 다른이 풀이

function solution(my_string: string, letter: string) {
  const answer = my_string.split(letter).join('')
  return answer
}
