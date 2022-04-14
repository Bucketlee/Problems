// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  if (yellow === 1) {
      return [3, 3];
  }

  for (let i = 1; i <= yellow**0.5; i += 1) {
      if (yellow%i === 0) {
          if (brown === (yellow/i*2 + i*2 + 4)) {
              return [yellow/i+2, i+2];
          }
      }
  }

  // 위 방법 말고도 brown yellow 다 더하고 약수 구하고 둘레 길이를 brown과 비교하는 것도 방법일듯
}

// 다른이 풀이
function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown+red)/i; i++) {
      var x = Math.floor((brown+red)/i);
      if( (x-2)*(i-2)=== red) {
          break;
      }
  }

  return [x,i];
}
