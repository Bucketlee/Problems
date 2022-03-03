function solution(lottos, win_nums) {
  var answer = [];
  
  let nice = 0;
  let shit = 9;
  let countZero = 0;
  
  for (let i = 0; i < lottos.length; i = i+1) {
    if (lottos[i] === 0) {
      countZero = countZero+1;
    }
    for (let j = 0; j < win_nums.length; j = j+1) {
      if (lottos[i] === win_nums[j]) {
        nice = nice+1;
        console.log(nice)
      }
    }
  }
  
  shit = 6-nice-countZero;
  
  shit === 6 ? answer.push(6) : answer.push(7-(6-shit));
  nice === 0 ? answer.push(6) : answer.push(7-nice);

  return answer;
}