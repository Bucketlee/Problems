// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers: number[], direction: 'right' | 'left') {
  const nums = numbers.slice()

  if (direction === 'right') {
    const pop = nums.pop()
    if (pop) {
      nums.unshift(pop)
    }
  } else {
    const shift = nums.shift()
    if (shift) {
      nums.push(shift)
    }
  }

  return nums
}
