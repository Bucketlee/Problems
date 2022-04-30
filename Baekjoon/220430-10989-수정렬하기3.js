const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

// 방법 모두 메모리초과 발생

// 방법 1
console.log(input.sort((a, b) => a - b).join("\n"));

// 방법 2
const nums = {};
input.forEach(num => {
  nums[num] ? nums[num] += 1 : nums[num] = 1;
});

const keys = Object.keys(nums);
for (let i = 0; i < keys.length; i += 1) {
  for (let j = 0; j < nums[keys[i]]; j += 1) {
    console.log(keys[i]);
  }
}
