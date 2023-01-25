// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken: number) {
  let serviceCount = 0
  let coupon: number = chicken
  while (coupon >= 10) {
    const service = parseInt(`${coupon / 10}`)
    serviceCount += service
    coupon -= service * 10 - service
  }

  return serviceCount
}

// 다른이 풀이

function solution(chicken: number) {
  let answer = 0
  let coupon = chicken

  while (coupon >= 10) {
    answer = answer + parseInt(`${coupon / 10}`)
    coupon = parseInt(`${coupon / 10}`) + (coupon % 10)
  }

  return answer
}
