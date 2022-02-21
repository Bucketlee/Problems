// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  const queue = [];
  for (let i = 0; i < operations.length; i += 1) {
      const [order, value] = operations[i].split(" ");
      if (order === "I") {
          queue.push(+value);
          queue.sort((a, b) => a - b);
      }
      else {
          value === "1" ? queue.pop() : queue.shift();
      }
  }

  if (queue.length > 1) {
      return [queue[queue.length-1], queue[0]];
  } else if (queue.length === 1) {
      return [queue[0], queue[0]];
  } else {
      return [0, 0];
  }
}

// 다른이풀이
function solution(arg) {
  var list = [];
  arg.forEach(t=>{
      if(t[0] === 'I'){
          list.push(+(t.split(" ")[1]));
      }
      else{
          if(!list.length) return;

          var val = (t[2] === '-' ? Math.min : Math.max)(...list);
          var delIndex = list.findIndex(t=> t ===  val);

          list.splice(delIndex, 1);
      }
  })

  return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}