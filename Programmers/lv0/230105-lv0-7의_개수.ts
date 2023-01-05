// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array: number[]) {
  return array.reduce((sum: number, arr: string | number) => {
    const str: string = String(arr);
    const beforeLength = str.length;
    const afterLength = str.replaceAll('7', '').length;
    const countOfSeven = beforeLength - afterLength;
    return sum + countOfSeven;
  }, 0)
}


// 다른이 풀이

function solution(array: number[]) {
  return array.join('').split('7').length-1;
}
