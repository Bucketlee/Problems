// https://school.programmers.co.kr/learn/courses/30/lessons/132265

// 처음 풀이 : 시간초과

function solution(topping: number[]) {
  let count = 0

  for (let i = 1; i < topping.length - 1; i += 1) {
    const left = topping.slice(0, i)
    const leftSet = new Set(left)

    const right = topping.slice(i)
    const rightSet = new Set(right)

    if (leftSet.size === rightSet.size) {
      count += 1
    }
  }

  return count
}

// 두번째 풀이

function solution(topping: number[]) {
  let count = 0
  const toppings = new Set(topping)
  const startIndexesOfToppings: number[] = []
  const endIndexesOfToppings: number[] = []

  toppings.forEach((t) => {
    startIndexesOfToppings.push(topping.indexOf(t))
    endIndexesOfToppings.push(topping.lastIndexOf(t))
  })

  for (let i = 0; i < topping.length - 1; i += 1) {
    let countOfLeftToppings = 0
    let countOfRightToppings = 0

    for (let j = 0; j < startIndexesOfToppings.length; j += 1) {
      if (startIndexesOfToppings[j] <= i) {
        countOfLeftToppings += 1
      }

      if (i < endIndexesOfToppings[j]) {
        countOfRightToppings += 1
      }
    }

    if (countOfLeftToppings === countOfRightToppings) {
      count += 1
    }
  }

  return count
}

// 세번째 풀이
// for 문을 최대한 한번만 돌고자 헀으나 역시 시간초과

function solution(topping: number[]) {
  const toppingsFromLeftToRight = new Set()
  const sizesOfLeftToppings = []
  const toppingsFromRightToLeft = new Set()
  const sizesOfRightToppings = []

  for (let i = 0; i < topping.length - 1; i += 1) {
    toppingsFromLeftToRight.add(topping[i])
    sizesOfLeftToppings.push(toppingsFromLeftToRight.size)
    toppingsFromRightToLeft.add(topping[topping.length - 1 - i])
    sizesOfRightToppings.unshift(toppingsFromRightToLeft.size)
  }

  let count = 0
  for (let i = 0; i < sizesOfLeftToppings.length; i += 1) {
    if (sizesOfLeftToppings[i] === sizesOfRightToppings[i]) {
      count += 1
    }
  }

  return count
}

// 네번째 풀이
// unshift 자체가 배열의 주소를 직접 바꾸는 형태기 때문에 시간복잡도가 올라가 push로 변경

function solution(topping: number[]) {
  const toppingsFromLeftToRight = new Set()
  const sizesOfLeftToppings = []
  const toppingsFromRightToLeft = new Set()
  const sizesOfRightToppings = []

  for (let i = 0; i < topping.length - 1; i += 1) {
    toppingsFromLeftToRight.add(topping[i])
    sizesOfLeftToppings.push(toppingsFromLeftToRight.size)
    toppingsFromRightToLeft.add(topping[topping.length - 1 - i])
    sizesOfRightToppings.push(toppingsFromRightToLeft.size)
  }

  let count = 0
  for (let i = 0; i < sizesOfLeftToppings.length; i += 1) {
    if (
      sizesOfLeftToppings[i] ===
      sizesOfRightToppings[sizesOfRightToppings.length - 1 - i]
    ) {
      count += 1
    }
  }

  return count
}

// 다른이 풀이

function solution(topping: number[]) {
  const a = new Set()
  const b: { [key: string]: number } = {}

  let answer = 0
  let check = 0

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++
    } else {
      b[topping[i]] = 1
      check++
    }
  }

  for (let i = 0; i < topping.length; i++) {
    a.add(topping[i])
    b[topping[i]]--

    if (!b[topping[i]]) check--
    if (a.size === check) answer++
  }

  return answer
}
