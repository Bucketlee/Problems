// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let maxLongLen = 0;
  let maxShortLen = 0;

  for (let i = 0; i < sizes.length; i += 1) {
    const longLen = sizes[i][0] > sizes[i][1] ? sizes[i][0] : sizes[i][1];
    const shortLen = sizes[i][0] > sizes[i][1] ? sizes[i][1] : sizes[i][0];

    if (longLen > maxLongLen) {
      maxLongLen = longLen;
    }

    if (shortLen > maxShortLen) {
      maxShortLen = shortLen;
    }
  }
  return maxLongLen*maxShortLen;
}


// 다른이 풀이

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach(s => {
      const [a, b] = s.sort((a,b) => a-b);
      if (a > h) h = a;
      if (b > w) w = b;
  });

  return w * h;
}
