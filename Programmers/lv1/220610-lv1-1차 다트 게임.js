// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const score = [];
  let currentScore = 0;

  for (let i = 0; i < dartResult.length; i += 1) {
    let target = dartResult[i];
    const len = score.length;

    if (dartResult[i] === '1' && dartResult[i+1] === '0') {
      target = '10';
      i += 1;
    }

    if (!isNaN(+target)) {
      currentScore = (+target);
    } else if (target === 'S') {
      score.push(currentScore);
    } else if (target === 'D') {
      score.push(currentScore**2);
    } else if (target === 'T') {
      score.push(currentScore**3);
    } else if (target === '*') {
      score[len-1] *= 2;
      score[len-2] *= 2;
    } else if (target === '#') {
      score[len-1] *= -1;
    }
  }

  return score.reduce((acc, cur) => acc + cur);
}


// 다른이 풀이

function solution(dartResult) {
  const bonus = { 'S': 1, 'D': 2, 'T': 3 },
        options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
        score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
