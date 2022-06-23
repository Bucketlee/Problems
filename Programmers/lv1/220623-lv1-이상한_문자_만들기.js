// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  const arr = s.split(' ');

  const newStrArr = arr.map(str => {
    let newStr = '';
    for (let i = 0; i < str.length; i += 1) {
      const target = str[i];
      if (i%2 === 0) {
        newStr += target.toUpperCase();
      } else {
        newStr += target.toLowerCase();
      }
      console.log(newStr);
    }
    return newStr;
  });

  return newStrArr.join(' ');
}


// 다른이 풀이

function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}
