// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  for (let i = 0; i < dic.length; i += 1) {
    const target = dic[i];
    let isLanguage = true;
    for (let j = 0; j < spell.length; j += 1) {
      const firstIdx = target.indexOf(spell[j]);
      const lastIdx = target.lastIndexOf(spell[j]);
      if (firstIdx === -1 || lastIdx === -1 || firstIdx !== lastIdx) {
        isLanguage = false;
        break;
      }
    }

    if (isLanguage) {
      return 1;
    }
  }

  return 2;
}

// 다른이 풀이

function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}
