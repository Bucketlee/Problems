// https://programmers.co.kr/learn/courses/30/lessons/42746
// 211201 못풀었었음

function solution(numbers) {
  numbers.sort((a, b) => {
    a = a.toString();
    b = b.toString();

    if (a.length !== b.length) {
      const aLength = a.length;
      a = a.repeat(b.length);
      b = b.repeat(aLength);
    }

    return (+b) - (+a);
  })
  return numbers.filter(num => num === 0).length === numbers.length ? "0" : numbers.join("");
}

// 1~6번 테스트 케이스 : [979, 97, 978, 81, 818, 817 여기서 81818이 아니라 81881이 나와야 함
// 11번 테스트 케이스 : [0, 0, 0, 0] 이 문자열 0이 나와야 함
console.log(solution([979, 97, 978, 81, 818, 817]));
console.log(solution([0, 0, 0, 0]));

// 다른이 풀이
// 똑똑하시네
function solution(numbers) {
  var answer = numbers.map(v=>v+'') // 문자열로 바꾸고
                .sort((a,b) => (b+a)*1 - (a+b)*1) // b와 a의 문자열을 합친것에 숫자로 바꿔서 비교
                .join('');

  return answer[0]==='0'?'0':answer;
}