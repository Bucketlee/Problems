// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  let result = skill_trees.length;

  skill_trees.forEach(s => {
    let skillIdx = 0;
    let nextSkill = skill[skillIdx]
    for (let j = 0; j < s.length; j += 1) {
      const isRequired = skill.includes(s[j]);
      if (isRequired) {
        if (s[j] === nextSkill) {
          skillIdx += 1;
          nextSkill = skill[skillIdx];
          if (!nextSkill) return;
        } else {
          result -= 1;
          return;
        }
      }
    }
  });

  return result;
}


// 다른이 풀이

function solution(skill, skill_trees) {
  var answer = 0;
  var regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
    .map((x) => x.replace(regex, ''))
    .filter((x) => {
      return skill.indexOf(x) === 0 || x === "";
    })
    .length
}