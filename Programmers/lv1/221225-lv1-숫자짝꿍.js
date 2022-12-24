// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const xNums = countChars(X);
  const yNums = countChars(Y);

  let common = '';
  const keys = Object.keys(xNums).sort((a, b) => (+b) - (+a));

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (yNums[key]) {
      if (key === '0' && common === '') {
        return '0';
      }
      const repeatCount = +xNums[key] > +yNums[key] ? +yNums[key] : +xNums[key];
      common += key.repeat(repeatCount);
    }
  }

  return common === '' ? '-1' : common;
}

function countChars(string) {
  const chars = {}
  for (let i = 0; i < string.length; i += 1) {
    const str = string[i];
    if (!chars[str]) {
      chars[str] = 1;
      continue;
    }
    chars[str] += 1;
  }

  return chars;
}


// 다른이 풀이

function solution(X, Y) {
  const commonNumbers = [...new Set(X.split(''))].filter((number) => {
    return Y.includes(number);
  }).sort((a, b) => b - a)

  if (!commonNumbers.length) return '-1';

  if (!Number(commonNumbers[0])) return '0';

  return commonNumbers.map((number) => {
    const Xcount = X.split('').reduce((count, Xnumber) => {
      if (Xnumber === number) return count += 1;

      return count;
    }, 0)

    const Ycount = Y.split('').reduce((count, Ynumber) => {
      if (Ynumber === number) return count += 1;

      return count;
    }, 0)

    return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
  }).join('')
}