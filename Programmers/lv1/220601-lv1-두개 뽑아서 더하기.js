// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const len = numbers.length;
  const nums = {};
  for (let i = 0; i < len - 1; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const value = numbers[i] + numbers[j];
      nums[value] = value;
    }
  }

  return Object.values(nums);
}


// 다른이풀이

function solution(numbers) {
  const temp = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j])
    }
  }

  const answer = [...new Set(temp)]

  return answer.sort((a, b) => a - b)
}