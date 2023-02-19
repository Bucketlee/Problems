// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  const arr = polynomial.split(" + ");
  let x = 0;
  let integer = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const string = arr[i];
    if (string[string.length - 1] === "x") {
      const number = +string.slice(0, string.length - 1);
      x += number === 0 ? 1 : number;
    } else {
      integer += +string;
    }
  }

  if (x === 0) {
    return `${integer}`;
  } else if (integer === 0) {
    return `${x === 1 ? "" : x}x`;
  }

  return `${x === 1 ? "" : x}x + ${integer}`;
}

// 다른이 풀이

function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
