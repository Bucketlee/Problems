// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(str) {
  let answer = '';

  answer = getLowerCase(str);
  answer = removeDisallowedCharacters(answer);
  answer = leaveOnlyOneRepeatedDot(answer);
  answer = deleteDotAtFirstAndLast(answer);
  answer = getValueAWhenEmpty(answer);
  answer = cutSpecifiedLength(answer);
  answer = fillMinLength(answer);

  return answer;
}

function getLowerCase(str) {
  if (typeof(str) !== 'string') {
    return 'type isn\'t string!';
  }
  return str.toLowerCase();
}


function removeDisallowedCharacters(str) {
  let newStr = '';

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const character = ['-', '_', '.'];
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < str.length; i += 1) {
    if (alphabet.includes(str[i]) || character.includes(str[i]) || num.includes(str[i])) {
      newStr += str[i];
    }
  }

  return newStr;
}


function leaveOnlyOneRepeatedDot(str) {
  let isUsedDotBefore = false;
  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== '.') {
      newStr += str[i];
      isUsedDotBefore = false;
    } else {
      if (!isUsedDotBefore) {
        newStr += str[i];
        isUsedDotBefore = true;
      }
    }
  }

  return newStr;
}


function deleteDotAtFirstAndLast(str) {
  let newStr = str;

  if (str[0] === '.') {
    newStr = newStr.slice(1);
  }

  if (newStr[newStr.length-1] === '.') {
    newStr = newStr.slice(0, newStr.length-1);
  }

  return newStr;
}


function getValueAWhenEmpty(str) {
  return str === '' ? 'a' : str;
}


function cutSpecifiedLength(str) {
  if (str.length >= 16 && str[14] === '.') {
    return str.slice(0, 14);
  } else if (str.length >= 16 && str[14] !== '.') {
    return str.slice(0, 15);
  }

  return str;
}


function fillMinLength(str) {
  while (str.length < 3) {
    str = str + str[str.length-1];
  }

  return str;
}


// 다른이풀이

function solution(new_id) {
  const answer = new_id
      .toLowerCase() // 1
      .replace(/[^\w-_.]/g, '') // 2
      .replace(/\.+/g, '.') // 3
      .replace(/^\.|\.$/g, '') // 4
      .replace(/^$/, 'a') // 5
      .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
