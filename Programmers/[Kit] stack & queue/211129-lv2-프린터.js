// https://programmers.co.kr/learn/courses/30/lessons/42587

// 나의 풀이
function solution1(priorities, location) {
  let targetLocation = location;
  let NumberOfPrints = 0;
  while (targetLocation !== -1) {
    const maxValueIndex = findMaxIndex(priorities);
    if (targetLocation === maxValueIndex) {
      NumberOfPrints = NumberOfPrints + 1;
      return NumberOfPrints;
    } else {
      if (maxValueIndex === 0) {
        priorities.shift();
        NumberOfPrints = NumberOfPrints + 1;
      } else {
        const NumToSendBack = priorities.shift();
        priorities.push(NumToSendBack);
      }

      if (targetLocation === 0) {
        targetLocation = priorities.length - 1;
      } else {
        targetLocation = targetLocation - 1;
      }
    }
  }
}

function findMaxIndex(arr) {
  const maxValue = Math.max(...arr);
  const maxValueIndex = arr.indexOf(maxValue);
  return maxValueIndex;
}


// 다른이풀이

function solution(priorities, location) {
  // map함수는 (element, index, array)임
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  var list = priorities.map((t,i)=>({
    my : i === location,
    val : t
  }));
  console.log(list);
  var count = 0;
  while(true){
    var cur = list.splice(0,1)[0];
    console.log(cur);
    // 배열 안의 어떤 요소라도 주어진 조건을 통과하는지 테스트
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    if(list.some(t=> t.val > cur.val )){
      list.push(cur);
    }
    else{
      count++;
      if(cur.my) return count;
    }
  }
}