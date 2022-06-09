// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const numOfFailedInStage = {};
  for (let i = 0; i < stages.length; i += 1) {
    const target = stages[i];

    if (numOfFailedInStage[target]) {
      numOfFailedInStage[target] += 1;
    } else {
      numOfFailedInStage[target] = 1;
    }
  }

  const failedRate = [];
  let player = numOfFailedInStage[N+1] ? numOfFailedInStage[N+1] : 0;
  for (let i = N; 0 < i; i -= 1) {
    const num = numOfFailedInStage[i] ? numOfFailedInStage[i] : 0;
    player += num;

    if (num === undefined) {
      failedRate.unshift(0);
    } else {
      failedRate.unshift(num / (player ? player : 1));
    }
  }

  const result = [];
  for (let i = 0; i < N; i += 1) {
    const maxRate = Math.max(...failedRate);
    const maxRateIdx = failedRate.indexOf(maxRate);
    result.push(maxRateIdx + 1);
    failedRate[maxRateIdx] = -1;
  }

  return result;
}


// 다른이 풀이

function solution(N, stages) {
  let result = [];
  for(let i=1; i<=N; i++){
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr/reach]);
  }
  result.sort((a,b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
