// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string: string) {
  const repository: { [key: string]: boolean } = {}
  let result: string = ''
  for (let i = 0; i < my_string.length; i += 1) {
    const target = my_string[i]
    if (!repository[target]) {
      repository[target] = true
      result += target
    }
  }

  return result
}

// 다른이 풀이

function solution(my_string: string) {
  return [...new Set(my_string)].join('')
}
