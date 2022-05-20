// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let result = 0;
  let F1 = 0;
  let F2 = 1;

  for (let i = 2; i <= n; i += 1){
      result = (F1 + F2) % 1234567;
      F1 = F2;
      F2 = result;
  }

  return result;
}


// 다른이풀이

function solution(n) {
  var result = [0 , 1];
  while ( result.length !== n + 1) {
      var fibonacci = (result[result.length - 2] + result[result.length - 1]) % 1234567
      result.push(fibonacci);
  }
   return result[n];
}
