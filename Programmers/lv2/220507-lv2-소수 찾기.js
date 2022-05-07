// https://programmers.co.kr/learn/courses/30/lessons/42839v

function solution(numbers) {

  function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= number**0.5; i = i+1) {
      if (number%i === 0) {
        return false;
      }
    }
    return true;
  }

  const getCombinations = function (arr, select) {
    const result = [];
    if (select === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, array) => {
      const rest = [ ...array.slice(0, index), ...array.slice(index + 1) ];
      const combinations = getCombinations(rest, select - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      result.push(...attached);
    });

    return result;
  }

  let nums = [];
  numbers.split('').map((v, index, arr) => nums = [...nums, ...getCombinations(arr, index + 1)]);

  const nonDuplNums = new Set();
  nums.forEach(num => nonDuplNums.add(+num.join('')));

  let primeCount = 0;
  nonDuplNums.forEach(num => {
    const isPrime = isPrimeNumber(num);
    if (isPrime) primeCount += 1;
  });

  return primeCount;
}

console.log(solution("011"));


// 다른이 풀이

function solution(numbers) {
  var answer = 0;

  var n = numbers.split('');
  var nums = new Set()
  combi(n,'');

  function combi(a, s) {
    if (s.length > 0) {
      if (nums.has(Number(s))=== false) {
        nums.add(Number(s));

        if (chkPrime(Number(s))) {
          answer++;
        }
      }
    }
    if (a.length > 0) {
      for (var i = 0; i< a.length; i++) {
        var t = a.slice(0)
        t.splice(i,1);
        combi(t,s + a[i]);
      }
    }
  }

  function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num%i===0) return false;
    }
    return true;
  }

  return answer;
}
