// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const costOflambSkewers = 12000;
  const costOfDrink = 2000;
  const countOfServiceDrink = Math.floor(n/10);
  const allCost = n*costOflambSkewers + (k-countOfServiceDrink)*costOfDrink;
  return allCost;
}


// 다른이 풀이

function solution(n, k) {
  return n*12000 + k*2000 - parseInt(n/10)*2000
}
