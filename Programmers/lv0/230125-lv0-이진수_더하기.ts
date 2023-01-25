// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1: string, bin2: string) {
  const sum = parseInt(bin1, 2) + parseInt(bin2, 2)
  return sum.toString(2)
}

// 다른이 풀이

function solution(bin1: string, bin2: string) {
  const sum = Number(bin1) + Number(bin2)
  const temp = [...sum.toString()].reverse().map((v) => +v)

  for (let i = temp.length; i < 11; i++) {
    temp.push(0)
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0
      temp[i + 1]++
    } else if (temp[i] === 3) {
      temp[i] = 1
      temp[i + 1]++
    }
  }
  return Number(temp.reverse().join('')).toString()
}
