// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let totalPrice = price;
  for (let i = 2; i <= count; i += 1) {
    totalPrice += price*i;
  }

  const leftMoney = totalPrice - money;
  return leftMoney >= 0 ? leftMoney : 0;
}


// 다른이 풀이 : 가우스공식 활용

function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
