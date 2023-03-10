// https://school.programmers.co.kr/learn/courses/30/lessons/131127#

function solution(want: string[], number: number[], discount: string[]) {
  const countOfWant: { [key: string]: number } = {}
  want.forEach((product, i) => (countOfWant[product] = number[i]))

  let countOfDay = 0

  for (let i = 0; i < discount.length; i += 1) {
    const excludedProduct = discount[i - 10]
    const addedProduct = discount[i]

    if (countOfWant[excludedProduct] !== undefined) {
      countOfWant[excludedProduct] += 1
    }

    if (countOfWant[addedProduct] !== undefined) {
      countOfWant[addedProduct] -= 1
    }

    const numbers: number[] = Object.values(countOfWant)
    const filteredNumbers = numbers.filter((num) => num > 0)
    if (filteredNumbers.length === 0) {
      countOfDay += 1
    }
  }

  return countOfDay
}

// 다른이 풀이

function solution(want: string[], number: number[], discount: string[]) {
  let count = 0
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10)

    let flag = true
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false
        break
      }
    }
    if (flag) count += 1
  }
  return count
}
