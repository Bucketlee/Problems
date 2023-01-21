// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string: string, num1: number, num2: number) {
  const arr = my_string.split('')
  const target = arr[num1]
  arr[num1] = arr[num2]
  arr[num2] = target

  return arr.join('')
}

// 메모리를 고려한 다른 풀이

function solution(my_string: string, num1: number, num2: number) {
  if (num1 > num2) {
    return (
      my_string.slice(0, num2) +
      my_string[num1] +
      my_string.slice(num2 + 1, num1) +
      my_string[num2] +
      my_string.slice(num1 + 1)
    )
  } else {
    return (
      my_string.slice(0, num1) +
      my_string[num2] +
      my_string.slice(num1 + 1, num2) +
      my_string[num1] +
      my_string.slice(num2 + 1)
    )
  }
}

// 다른이 풀이

function solution(my_string: string, num1: number, num2: number) {
  const arr = my_string.split('')
  ;[arr[num1], arr[num2]] = [my_string[num2], my_string[num1]]
  return arr.join('')
}
