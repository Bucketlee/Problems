// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order: number) {
  const str = '' + order
  let count = 0
  for (let i = 0; i < str.length; i += 1) {
    const target = str[i]
    if (target === '3' || target === '6' || target === '9') {
      count += 1
    }
  }
  return count
}

// 다른이 풀이

function solution(order: number) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length
  return answer
}
