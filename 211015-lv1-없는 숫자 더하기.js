// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const num = new Object();
  let i = 0;
  while (i<10) {
    num[i] = i;
    i = i+1;
  }

  numbers.map(el => {
    delete num[el];
  })

  let result = 0;
  for (let j = 0; j < Object.values(num).length; j = j+1) {
    result = result + Object.values(num)[j];
  }

  return result;
}


// 다른이 풀이 reduce를 쓸 것!

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}