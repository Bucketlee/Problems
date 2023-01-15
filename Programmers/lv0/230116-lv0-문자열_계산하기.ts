// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string: string): number {
  const arr = my_string.split(' ');
  let sum = parseInt(arr[0]);
  for (let i = 2; i < arr.length; i += 2) {
      const operator = arr[i-1];
      const num = parseInt(arr[i]);
      sum += operator === '+' ? num : -num;
  }

  return sum;
}


// 다른이 풀이 1

const solution2 = (str: string) => eval(str);


// 다른이 풀이 3

// function solution(my_string) {
//   const arr = my_string.split(' ').filter(e=>e);
//   while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
//   return arr[0]
// }
