// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  let result = '0';
  for (let i = food.length - 1; i >= 1; i -= 1) {
    const countOfRepeat = Math.floor(food[i]/2);
    const addStr = `${i}`.repeat(countOfRepeat);
    result = result + addStr;
    result = addStr + result;
  }

  return result;
}


// 다른이 풀이

function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i]/2));
  }

  return res + '0' + [...res].reverse().join('');
}
