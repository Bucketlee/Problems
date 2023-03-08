// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient: number[]) {
  let string = ingredient.join('')
  let count = 0
  while (string.indexOf('1231') !== -1) {
    string = string.replace('1231', '')
    count += 1
  }

  return count
}

function solution(ingredient: number[]) {
  let count = 0
  let copy = [...ingredient]
  for (let i = 0; i < copy.length - 3; i += 1) {
    if (
      copy[i] === 1 &&
      copy[i + 1] === 2 &&
      copy[i + 2] === 3 &&
      copy[i + 3] === 1
    ) {
      count += 1
      copy.splice(i, 4)
      i -= 4
    }
  }

  return count
}

// 다른이 풀이 : 내 풀이와 유사함

function solution(ingredient: number[]) {
  let count = 0

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join('') === '1231') {
      count++
      ingredient.splice(i, 4)
      i -= 3
    }
  }

  return count
}

// 다른이 풀이 : 스택으로 확인

function solution(ingredient: number[]) {
  let stk = []
  let count = 0
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i])
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++
      stk.splice(-4)
    }
  }
  return count
}
