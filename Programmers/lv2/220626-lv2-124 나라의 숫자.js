// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  const nums = [4, 1, 2];
  let result = '';

  while (n) {
    const num = n%3;
    result = nums[num] + result;
    n = num === 0 ? n/3 - 1 : Math.floor(n/3);
  }

  return result;
}


// 다른이 풀이

// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function change124(n) {
  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124(10));
