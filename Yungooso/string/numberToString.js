// number를 string으로 변경하는 함수 구현

function NumberToString(num) {
  let string = '';
  let len = 0;

  if (num < 0) {
    string += "-";
    num = num*-1;
  }

  while (num/(10**len) > 1) {
    len += 1;
  }

  for (let i = len, j = 0; i > 0; i -= 1, j += 1) {
    const target = (num%10**i - num%10**(i-1))/10**(i-1);
    const str = String.fromCharCode(target+48);
    string += str;
  }

  return string;
}

console.log(NumberToString(12345), typeof(NumberToString(12345)));
console.log(NumberToString(-12345), typeof(NumberToString(-12345)));
