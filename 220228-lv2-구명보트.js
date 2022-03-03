// https://programmers.co.kr/learn/courses/30/lessons/42885

// 첫번째 풀이 : 효율성문제 통과 못함
function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b-a);

  while (people.length > 1) {
      if (people[0] + people[people.length-1] > limit) {
          people.shift();
          answer += 1;
      } else {
          people.shift();
          people.pop();
          answer += 1;
      }

      if (people.length === 1) {
          answer += 1;
      }
  }

  return answer;
}


// 수정 풀이 : array말고 index를 활용하면?

function solution(people, limit) {
  let answer = 0;
  let start = 0;
  let end = people.length - 1;

  people.sort((a, b) => b-a);

  while ((start < end)) {
    if (people[start] + people[end] <= limit) {
      start += 1;
      end -= 1;
      answer += 1;
    } else {
      start += 1;
      answer += 1;
    }
  }

  return start === end ? answer + 1  : answer;
}


// 다른이 풀이
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }
    return people.length-i;
}
