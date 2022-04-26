// https://programmers.co.kr/learn/courses/30/lessons/17677

// 1. 소문자로 전체 변환한다.
// 2. 다중집합 원소 A와 B로 만든다 (for문) (알파벳이 아니면 추가하지 않는다).
// 3. A와 B를 객체로 만든다 (key는 A와 B의 값, value는 해당 값의 수)
// 4. A U B(a)와 A n B(b)를 만든다
// 5. b/a*65536을 계산한 후 소수점 아래를 버리고 출력한다

function solution(str1, str2) {

  const getObjBreakTwoWords = (str) => {
    const obj = {};

    const lowerAlphabetChecker = /[a-z]/;

    for (let i = 1; i < str.length; i += 1) {
      if (lowerAlphabetChecker.test(str[i-1]) && lowerAlphabetChecker.test(str[i])) {
        const twoWords = str[i-1] + str[i];
        obj[twoWords] ? obj[twoWords] += 1 : obj[twoWords] = 1;
      }
    }

    return obj;
  }

  const obj1 = getObjBreakTwoWords(str1.toLowerCase());
  const obj2 = getObjBreakTwoWords(str2.toLowerCase());

  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return 65536;
  }

  const getUnionFromTwoObjs = (obj1, obj2) => {
    const obj = {};

    const key1 = Object.keys(obj1);
    key1.forEach(key => {
      if (!obj[key]) {
        obj[key] = !obj2[key] ? obj1[key] : (
          obj1[key] > obj2[key] ? obj1[key] : obj2[key]
        );
      }
    });

    const key2 = Object.keys(obj2);
    key2.forEach(key => {
      if (!obj[key]) {
        obj[key] = !obj1[key] ? obj2[key] : (
          obj2[key] > obj1[key] ? obj2[key] : obj1[key]
        );
      }
    });

    return obj;
  }

  const getIntersectionFromTwoObjs = (obj1, obj2) => {
    const obj = {};

    const key1 = Object.keys(obj1);
    key1.forEach(key => {
      if (!obj[key] && obj2[key]) {
        obj[key] = obj1[key] > obj2[key] ? obj2[key] : obj1[key];
      }
    });

    const key2 = Object.keys(obj2);
    key2.forEach(key => {
      if (!obj[key] && obj1[key]) {
        obj[key] = obj1[key] > obj2[key] ? obj1[key] : obj2[key];
      }
    });

    return obj;
  }

  const union = getUnionFromTwoObjs(obj1, obj2);
  const intersection = getIntersectionFromTwoObjs(obj1, obj2);

  const result = Object.values(intersection).reduce((pre, cur) => pre + cur, 0) / Object.values(union).reduce((pre, cur) => pre + cur, 0);

  return Math.floor(result*65536);
}
