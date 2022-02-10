// 내 풀이

function solution(answers) {
  const typeA = [1, 2, 3, 4, 5];
  const typeB = [2, 1, 2, 3, 2, 4, 2, 5];
  const typeC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const resultA = getNumOfSameValueByComparingIndexOfArrToRepeatArr(answers, typeA);
  const resultB = getNumOfSameValueByComparingIndexOfArrToRepeatArr(answers, typeB);
  const resultC = getNumOfSameValueByComparingIndexOfArrToRepeatArr(answers, typeC);

  const results = [resultA, resultB, resultC];
  const maxCurrentValue = Math.max(...results);

  const answer = [];
  if (results[0] === maxCurrentValue) {
    answer.push(1);
  }
  if (results[1] === maxCurrentValue) {
    answer.push(2);
  }
  if (results[2] === maxCurrentValue) {
    answer.push(3);
  }

  return answer;
}

function getNumOfSameValueByComparingIndexOfArrToRepeatArr(arr, repeatArr) {
  return (
    arr.reduce((pre, cur, i) => {
      if (cur === repeatArr[i%repeatArr.length]) {
        return pre + 1;
      } else {
        return pre;
      }
    }, 0)
  );
}


// 다른이 풀이

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
  var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
  var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
  var max = Math.max(a1c,a2c,a3c);

  if (a1c === max) {answer.push(1)};
  if (a2c === max) {answer.push(2)};
  if (a3c === max) {answer.push(3)};

  return answer;
}
