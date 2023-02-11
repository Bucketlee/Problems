// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n: number) {
  let num = 1
  while (n > 1) {
    num += 1
    while (num % 3 === 0 || num.toString().includes('3')) {
      num += 1
    }
    n -= 1
  }

  return num
}

// 다른이 풀이

function solution(n: number) {
  let arr = []
  let num = 0
  while (arr.length !== n && ++num)
    if (num % 3 !== 0 && !('' + num).includes('3')) arr.push(num)
  return arr.pop()
}
