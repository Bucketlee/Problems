// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const arr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    const innerArr = [];
    for (let j = 0; j < arr1[i].length; j += 1) {
      const value = arr1[i][j] + arr2[i][j];
      innerArr.push(value);
    }
    arr.push(innerArr);
  }
  return arr;
}


// 다른이 풀이

function sumMatrix(A,B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
