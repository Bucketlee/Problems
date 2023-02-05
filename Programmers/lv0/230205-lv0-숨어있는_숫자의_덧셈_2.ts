// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string: string) {
  let sum = 0
  let lastIndex = 0
  for (let i = 0; i < my_string.length; i += 1) {
    const target = my_string[i]
    if (isNaN(+target)) {
      sum += +my_string.slice(lastIndex, i)
      lastIndex = i + 1
    }
  }

  if (!isNaN(my_string.length - 1)) {
    sum += +my_string.slice(lastIndex)
  }

  return sum
}

// 다른이 풀이

function solution(my_string: string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0)
}
