// https://programmers.co.kr/learn/courses/30/lessons/42885

// 최종 풀이 : array말고 index를 활용하면?

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


// 처음풀이 : 문제를 제대로 읽지 못함 (최대 2명밖에 탈 수 없다는 사실을 놓치고 품);

function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b-a);

  while (people.length > 0) {
    if (people[0] + people[people.length-1] > limit) {
      people.shift();
      answer += 1;
    } else {
      let currentWeight = people[0];
      let i = 1;

      while (currentWeight <= 100) {
        if (currentWeight + people[people.length-i] > limit) {
          people.shift();
          for (let j = 1; j < i; j += 1) {
            people.pop();
          }
          answer += 1;
          i = 1;
          currentWeight = people[0];
        } else {
          if (people.length <= i) {
            answer += 1;
            people = [];
          }
          currentWeight += people[people.length-i];
          i += 1;
        }
      }
    }
  }
  return answer;
}


// 두번째 풀이 : 효율성문제 통과 못함
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


// 다른이 풀이
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }
    return people.length-i;
}
