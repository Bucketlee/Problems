// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  const upperCase = lowerCase.map(en => en.toUpperCase());

  let newStr = '';
  const alphabetLen = lowerCase.length;

  for (let i = 0; i < s.length; i+= 1) {
    const target = s[i];
    const idx = upperCase.indexOf(target) >= 0 ? upperCase.indexOf(target) : lowerCase.indexOf(target);

    if (idx === -1) {
      newStr += target;
    } else if (target === target.toUpperCase()) {
      newStr += upperCase[(idx + n)%alphabetLen];
    } else {
      newStr += lowerCase[(idx + n)%alphabetLen];
    }
  }

  return newStr;
}


// 다른이 풀이

function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer= '';

  for(var i =0; i <s.length; i++){
    var text = s[i];
    if(text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text)+n;
    if(index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
