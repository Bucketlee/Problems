// https://programmers.co.kr/learn/courses/30/lessons/64065

// 1. str을 배열 arr로 parse 함
// 2. 배열 arr 를 length 순으로 정렬함
// 3. 빈 배열 result를 만들고, 배열 arr을 이 중 for문을 돌면서 result에 push함

function solution(s) {
  let str = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "{") {
      str += "[";
    } else if (s[i] === "}") {
      str += "]";
    } else {
      str += s[i];
    }
  }

  const arr = JSON.parse(str);
  arr.sort((a, b) => a.length - b.length);

  const tuple = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].forEach(n => {
      if (!tuple.find(el => el === n)) tuple.push(n);
    });
  }

  return tuple;
}

solution("{{4,2,3},{3},{2,3,4,1},{2,3}}");


// 다른이 풀이

function solution(s) {
  return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
  .sort((a, b) => a.length - b.length)
  .reduce((arr, v, n) => {
    if (n) {
      return arr.concat(v.filter(f => !arr.includes(f)));
    }
    return v;
  }, []);
}
