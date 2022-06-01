// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  const len = nums.length;
  let count = 0;
  for (let i = 0; i < len-2; i += 1) {
    for (let j = i + 1; j < len-1; j += 1) {
      for (k = j + 1; k < len; k += 1) {
        const target = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(target)) {
          count += 1;
        }
      }
    }
  }

  return count;
}

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i**2 <= num; i += 1) {
    if (num%i === 0) {
      return false;
    }
  }

  return true;
}


// 다른이풀이

function primecheck(n){
  for(var i=2;i<=Math.sqrt(n);i++){
    if(n%i == 0){
      return false;
    }
  }
  return true;
}
function solution(nums){
  var cnt = 0;
  for(var i=0;i<nums.length-2;i++){
    for(var j=i+1;j<nums.length-1;j++){
      for(var w=j+1;w<nums.length;w++){
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if(primecheck(nums[i]+nums[j]+nums[w])){
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}
