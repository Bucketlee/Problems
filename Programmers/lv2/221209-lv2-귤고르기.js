// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const size = {}
  tangerine.forEach(el => size[el] = size[el] ? size[el] + 1 : 1);
  const quantityPerSize = Object.values(size);
  const sortedQuantity = quantityPerSize.sort((a, b) => b - a);
  
  let total = 0;
  for (let i = 0; i < sortedQuantity.length; i += 1) {
    total += sortedQuantity[i];
    if (total >= k) {
      return i+1;
    }
  }
  
  return k;
}


// 다른이 풀이

function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
  return answer;
}
