// https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let network = 0;
  const checkedNetwork = {};

  for (let i = 0; i < n; i += 1) {
    if (!checkedNetwork[i]) {
      network += 1;
      checkNetworkWithN(i, computers[i]);
    }
  }

  function checkNetworkWithN(n, computer) {
    for (let j = 0; j < computer.length; j += 1) {
      if (j === n) continue;

      checkedNetwork[n] = true;

      if (!checkedNetwork[j] && computer[j] === 1) {
        checkNetworkWithN(j, computers[j]);
      }
    }
  }

  return network;
}


// 다른이풀이

function solution(n, computers) {
  var answer = 0;
  var isVisited = [];

  for(var i =0; i <n; i++) {
      isVisited.push(false);
  }

  var DFS = function(computers, i) {
      console.log('DFS excuted');
      if(isVisited[i]) { return; }
      isVisited[i] = true;
      console.log(isVisited);

      for(var j = 0; j < computers.length; j++) {
          if(computers[i][j] === 1) {
              console.log(i + ', ' + j);
              console.log('connected');
              DFS(computers, j);
          }
      }
  }

  for(var i = 0; i < n; i++) {
      if(!isVisited[i]) {
          answer++;
          console.log(isVisited, '도입부');
          console.log(answer);
          DFS(computers, i);
      }
  }

  return answer;
}
