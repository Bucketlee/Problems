// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  const compressedStrings = [s];

  for (let i = 1; i < s.length/2+1; i = i+1) {
    let compressedStringToPush = '';
    let numberOfStringRepetitions = 1;

    for (let j = 0; j < s.length; j = j+i) {
      const partStr = s.slice(j, j+i);
      const checkTargetStr = s.slice(j+i, j+i+i);
      if (partStr === checkTargetStr) {
        numberOfStringRepetitions = numberOfStringRepetitions+1;
      } else {
        if (numberOfStringRepetitions === 1) {
          compressedStringToPush = compressedStringToPush+partStr;
        } else {
          compressedStringToPush = compressedStringToPush+numberOfStringRepetitions+partStr;
          numberOfStringRepetitions = 1;
        }
      }
    }

    if (s !== compressedStringToPush) {
      compressedStrings.push(i+'번째');
      compressedStrings.push(compressedStringToPush);
    }
  }

  let answer = 0;
  compressedStrings.map(el => {
    if (el.length < answer) {
      answer = el.length;
    } else {
      answer = answer;
    }
  })
  return answer;
}

// while로 문자열을 i만큼 나누어 계산
function solution(s) {
  const compressedStrings = [s];

  for (let i = 1; i < s.length/2+1; i = i+1) {
    let separatedStr = [];
    let strToSplit = s;
    let cutIndex = 0;

    while (strToSplit.length > i) {
      separatedStr.push(strToSplit.slice(cutIndex, cutIndex+i));
      strToSplit = strToSplit.slice(cutIndex+i);
    }
    if (strToSplit !== '') {
      separatedStr.push(strToSplit);
    }

    let strNumberOfRepetitions = 1;
    let compressedCharacters = '';
    for (let j = 0; j < separatedStr.length; j = j+1) {
      if (separatedStr[j] === separatedStr[j+1]) {
        strNumberOfRepetitions = strNumberOfRepetitions+1;
      } else {
        if (strNumberOfRepetitions === 1) {
          compressedCharacters = compressedCharacters+separatedStr[j];
        } else {
          compressedCharacters = compressedCharacters+strNumberOfRepetitions+separatedStr[j];
          strNumberOfRepetitions = 1;
        }
      }
    }

    if (compressedCharacters !== s) {
      compressedStrings.push(compressedCharacters);
    }
  }

  let answer = s.length;
  compressedStrings.map(el => {
    if (el.length < answer) {
      answer = el.length;
    } else {
      answer = answer;
    }
  })
  return answer;
}


// // 다른이풀이
// const solution = s => {
//   const range = [...Array(s.length)].map((_, i) => i + 1);
//   return Math.min(...range.map(i => compress(s, i).length));
// };

// const compress = (s, n) => {
//   const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
//   return make(
//     chunk(s, n).reduce(
//       ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
//       ['', '', 0]
//     )
//   );
// };

// const chunk = (s, n) =>
//   s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];