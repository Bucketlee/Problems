// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string: string) {
  const upper = my_string.toUpperCase()
  let result = ''
  for (let i = 0; i < my_string.length; i += 1) {
    if (upper[i] === my_string[i]) {
      result += upper[i].toLowerCase()
    } else {
      result += upper[i]
    }
  }

  return result
}

// 다른이 풀이
function solution(my_string: string) {
  var answer = ''
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
  return answer
}
