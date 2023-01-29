// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp: string) {
  let result = ''
  for (let i = 0; i < rsp.length; i += 1) {
    const win = rsp[i] === '0' ? '5' : rsp[i] === '5' ? '2' : '0'
    result += win
  }

  return result
}

// 다른이 풀이

function solution(rsp: string) {
  let arr: any = {
    2: 0,
    0: 5,
    5: 2,
  }
  var answer = [...rsp].map((v) => arr[v]).join('')
  return answer
}
