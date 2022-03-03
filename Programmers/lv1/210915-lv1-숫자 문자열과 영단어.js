function solution(s) {
  let answer = '';

  const strNumObj = { 'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9' };
  
  for (let i = 0; i < s.length; i = i+1) {
    if (isNaN(Number(s[i]))) {
      if (strNumObj[s[i]+s[i+1]+s[i+2]] !== undefined) {
        answer = answer + strNumObj[s[i]+s[i+1]+s[i+2]];
        i = i+2;
      } else if (strNumObj[s[i]+s[i+1]+s[i+2]+s[i+3]] !== undefined) {
        answer = answer + strNumObj[s[i]+s[i+1]+s[i+2]+s[i+3]];
        i = i+3;
      } else if(strNumObj[s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]] !== undefined) {
        answer = answer + strNumObj[s[i]+s[i+1]+s[i+2]+s[i+3]+s[i+4]];
        i = i+4;
      }
    } else {
      
      answer = answer + s[i];
    }
  }
  return Number(answer);
}


// 다른이풀이

/*
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
*/
