// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz: string[]) {
  const results = [];

  for (let i = 0; i < quiz.length; i += 1) {
    const [firstValue, operator, secondValue, _, equal] = quiz[i].split(' ');
    const result = operator === '+' ? (+firstValue) + (+secondValue) : (+firstValue) - (+secondValue);
    results.push(result === (+equal) ? "O" : "X");
  }

  return results;
}


// 다른이풀이

function solution(quiz: string[]) {
  return quiz.map(t => {
    const [calc, result] = t.split(' = ');
    const sign = calc.includes('+') ? 1 : -1
    const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

    return +a + (+b * sign) === +result ? 'O' : 'X'
  });
}
