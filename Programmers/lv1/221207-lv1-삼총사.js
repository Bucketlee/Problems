// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  let countOfCases = 0;
  const sortedNumbers = number.slice().sort((a, b) => a - b);
  const len = sortedNumbers.length;
  for (let i = 0; i < len-2; i += 1) {
    for (let j = i + 1; j < len-1; j += 1) {
      if (sortedNumbers[i] + sortedNumbers[j] > 0) {
        continue;
      }
      for (let k = j + 1; k < len; k += 1) {
        if (sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k] === 0) {
          countOfCases += 1;
        }

        if (sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k] > 0) {
          continue;
        }
      }
    }
  }
  return countOfCases;
}


// 다른이 풀이

function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  }
  combination([], 0);
  return result;
}
