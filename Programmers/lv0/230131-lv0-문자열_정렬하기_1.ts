// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string: string) {
  const nums = []
  for (let i = 0; i < my_string.length; i += 1) {
    const target = my_string[i]
    if (Number(target) || target === '0') {
      nums.push(+target)
    }
  }

  return nums.sort((a, b) => a - b)
}
