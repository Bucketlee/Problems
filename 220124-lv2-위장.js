// https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
function solution(clothes) {

  const separatedClothes = {};

  clothes.forEach(cl => {
      separatedClothes[cl[1]] ? separatedClothes[cl[1]] += 1 : separatedClothes[cl[1]] = 1;
  });

  const values = Object.values(separatedClothes);
  const result = values.reduce((pre, cur) => {
    return pre*(cur+1);
  }, 1);

  return result-1;
}

// 다른이 풀이
function solution(clothes) {
  return Object.values(clothes.reduce((obj, t)=> {
      obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
      return obj;
  } , {})).reduce((a,b)=> a*(b+1), 1)-1;
}