// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const sums = {};
  const len = elements.length;
  for (let i = 1; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
        let sum = 0;
        for (let k = 0; k < i; k += 1) {
          const index = len <= j + k ? j + k - len : j + k;
          sum += elements[index];   
        }
      sums[sum] = true;
    }
  }
  
  return Object.keys(sums).length + 1;
}


// 다른이 풀이

function solution(elements) {
  var answer = 0
 const sum = (arr) => arr.reduce((a, b) => a + b, 0)

 const set = new Set()

 for (let i = 1; i <= elements.length; i++) {
   for (let j = 0; j < elements.length; j++) {
     if (j + i > elements.length) {
       set.add(
         sum(elements.slice(j, elements.length)) +
           sum(elements.slice(0, j + i - elements.length))
       )
     } else {
       set.add(sum(elements.slice(j, j + i)))
     }
   }
 }

 answer = set.size

 return answer
}
