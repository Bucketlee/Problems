// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  let result = '';
  let lastLeftNum = 's';
  let lastRightNum = 's';
  numbers.forEach(num => {
    if (num === 1 || num === 4 || num === 7) {
      result += 'L';
      lastLeftNum = num;
    } else if (num === 3 || num === 6 || num === 9) {
      result += 'R';
      lastRightNum = num;
    } else {
      const leftDistance = keyPad[num][lastLeftNum];
      const rightDistance = keyPad[num][lastRightNum];

      if (leftDistance > rightDistance) {
        result += 'R';
        lastRightNum = num;
      } else if (leftDistance < rightDistance) {
        result += 'L';
        lastLeftNum = num;
      } else {
        if (hand === 'left') {
          result += 'L';
          lastLeftNum = num;
        } else {
          result += 'R';
          lastRightNum = num;
        }
      }
    }
  });

  return result;
}

const keyPad = {
  '2': {
    '1': 1,
    '2': 0,
    '3': 1,
    '4': 2,
    '5': 1,
    '6': 2,
    '7': 3,
    '8': 2,
    '9': 3,
    '0': 3,
    's': 4,
  },
  '5': {
    '1': 2,
    '2': 1,
    '3': 2,
    '4': 1,
    '5': 0,
    '6': 1,
    '7': 2,
    '8': 1,
    '9': 2,
    '0': 2,
    's': 3,
  },
  '8': {
    '1': 3,
    '2': 2,
    '3': 3,
    '4': 2,
    '5': 1,
    '6': 2,
    '7': 1,
    '8': 0,
    '9': 1,
    '0': 1,
    's': 2,
  },
  '0': {
    '1': 4,
    '2': 3,
    '3': 4,
    '4': 3,
    '5': 2,
    '6': 3,
    '7': 2,
    '8': 1,
    '9': 2,
    '0': 0,
    's': 1,
  }
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));


// 다른이 풀이

function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}