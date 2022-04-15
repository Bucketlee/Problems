// .이 없는 number로 된 string이 들어오면 만들 수 있는 IP 경우의 수 찾기

function getIPNumOfCases(str) {
  if (str.length < 4 || str.length > 12) {
    return 0;
  }

  const answer = [];

  function divideStrByIp(str, arr) {

    for (let i = 1; i < 4; i += 1) {
      if (str === "" && arr.length < 4) {
        return;
      }

      const newArr = arr.slice();
      newArr.push(str.slice(0, i));
      const newStr = str.slice(i);

      if (newArr.length === 4 && newStr === "") {
        const result = isIPCorrect(newArr.join("."));
        if (result) {
          answer.push(result);
        }
        return;
      } else if (newArr.length === 4 && newStr !== "") {
        return;
      } else {
        divideStrByIp(newStr, newArr);
      }
    }
  }

  divideStrByIp(str, []);

  return answer;
}

function isIPCorrect(str) {
  const IPArr = str.split(".");
  if (IPArr.length !== 4) {
    return false;
  }

  if (str[0][0] === "0") {
    return false;
  }

  for (let i = 0; i < IPArr.length; i += 1) {

    if (IPArr[i].length > 3) {
      return false;
    }

    if (IPArr[i].length >= 2 && IPArr[i][0] === "0") {
      return false;
    }

    if (+IPArr[i] > 255) {
      return false;
    }
  }

  return str;
}

console.log("결과는", getIPNumOfCases("19216801"));
