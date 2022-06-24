// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const len = phone_number.length;
  let newNum = '*'.repeat(len-4);

  newNum += phone_number[len-4];
  newNum += phone_number[len-3];
  newNum += phone_number[len-2];
  newNum += phone_number[len-1];

  return newNum;
}


// 다른이 풀이

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
