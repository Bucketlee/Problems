// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const evenNums = num_list.reduce((count, num) => num%2 === 0 ? count + 1 : count, 0);
  return [evenNums, num_list.length - evenNums];
}


// 다른이풀이

function solution(num_list) {
  var answer = [0,0];

  for(let a of num_list){
    answer[a%2] += 1
  }

  return answer;
}
