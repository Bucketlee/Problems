// https://school.programmers.co.kr/learn/courses/30/lessons/142086#

function solution(s) {
  const spellIndex = {};
  return s.split('').map((spell, i) => {
    const before = spellIndex[spell];
    spellIndex[spell] = i;
    return before >= 0 ? i-before : -1;
  })
}


// 다른이 풀이

function solution(s) {
  const obj = {};
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] != null) answer[i] = i - obj[s[i]];
    else answer[i] = -1;
    obj[s[i]] = i;
  }
  return answer;
}
