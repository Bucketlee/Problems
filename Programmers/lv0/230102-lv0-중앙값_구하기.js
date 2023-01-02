// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  const sortedArray = array.slice().sort((a, b) => b - a);
  return sortedArray[parseInt(sortedArray.length/2)];
}
