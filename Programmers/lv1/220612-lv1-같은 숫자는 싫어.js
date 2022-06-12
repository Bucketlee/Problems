// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
  const result = [];

  result.push(arr[0])
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i-1] !== arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}


// 다른이 풀이

function solution(arr)
{
  return arr.filter((val,index) => val != arr[index+1]);
}
