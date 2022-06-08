// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const set = new Set(nums);
  const len = set.size;
  const max = Math.floor(nums.length/2);
  return max > len ? len : max;
}


// 다른이풀이

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
