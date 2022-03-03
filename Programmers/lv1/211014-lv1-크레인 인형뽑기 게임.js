https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const machine = board.slice();
  const storage = new Array();
  let result = 0;
  moves.map(num => {
    num = num-1;
    for (let i = 0; i < machine.length; i = i+1) {
      if (machine[i][num] !== 0 && storage[storage.length-1] !== machine[i][num]) {
        storage.push(machine[i][num]);
        machine[i][num] = 0;
        break
      } else if (machine[i][num] !== 0 && storage[storage.length-1] === machine[i][num]) {
        storage.pop();
        machine[i][num] = 0;
        result = result+1;
        break
      }
    }
  });
  result = result*2;
  return result;
}
