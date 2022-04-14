// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const arr = new Array(n).fill(1);

  lost
    .sort((a, b) => a - b)
    .forEach(num => arr[num-1] -= 1);

  reserve
    .sort((a, b) => a - b)
    .forEach((num, i) => {
      if (arr[num-1] === 0) {
        arr[num-1] += 1;
      } else {
        if (arr[num-2] !== -1 && arr[num-2] === 0) {
          arr[num-2] += 1;
        } else if (arr[num] !== arr.length && arr[num] === 0) {
          if (!(reserve[i+1] === num+1 && arr[num+1] === 0)) arr[num] += 1;
        }
      }
    });

  return arr.filter(el => el === 1).length;
}


// 다른이 풀이

function solution(n, lost, reserve) {
  return n - lost.filter(a => {
      const b = reserve.find(r => Math.abs(r-a) <= 1)
      if(!b) return true
      reserve = reserve.filter(r => r !== b)
  }).length
}
