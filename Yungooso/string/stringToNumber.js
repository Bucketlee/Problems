// string을 number로 변경하는 함수 구현

function stringToNumber(str) {
  let num = 0;
  let i = str[0] === "-" ? 1 : 0;
  for (i; i < str.length; i += 1) {
    num += (str[i].charCodeAt(0)-48)*10**(str.length-i-1);
  }

  if (str[0] === "-") {
    num = num*-1;
  }
  return num;
}

console.log(stringToNumber("12345"), typeof(stringToNumber("12345")));
console.log(stringToNumber("-12345"), typeof(stringToNumber("-12345")));

