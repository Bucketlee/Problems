// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list: number[], n: number) {
  const result = []
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n))
  }

  return result
}

// 다른이 풀이

function solution(num_list: number[], n: number) {
  var answer = []

  while (num_list.length) {
    answer.push(num_list.splice(0, n))
  }

  return answer
}
