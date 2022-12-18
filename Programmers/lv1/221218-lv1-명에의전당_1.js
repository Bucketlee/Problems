// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let min = score[0];
  const result = [min];
  const hallOfFame = [min];
  
  for (let i = 1; i < score.length; i += 1) {
    const target = score[i];
    if (k > i) {
      hallOfFame.push(target);
    } else {
      if (target > min) {
        hallOfFame[k-1] = target;
      }
    }
    hallOfFame.sort((a, b) => b - a);
    min = hallOfFame[hallOfFame.length - 1];
    result.push(min)
  }
  
  return result;
}


// 다른이 풀이

function solution(k, score) {
  const stack = []
  return score.reduce((a,c) => {
    if(stack.length < k) {
      stack.push(c)
      stack.sort((a,b) => a - b)
    }
    else {
      stack.push(c)
      stack.sort((a,b) => a - b)
      stack.shift()
    }
    a.push(stack[0])
    return a
  },[])
}
