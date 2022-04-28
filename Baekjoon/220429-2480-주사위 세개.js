const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const dice = input[0].split(' ').map(str => +str);

if (dice[0] === dice[1] && dice[1] === dice[2]) {
  console.log(10000 + dice[0]*1000);
} else if (dice[0] === dice[1] || dice[0] === dice[2] || dice[1] === dice[2]) {
  dice[0] === dice[1] ? console.log(1000 + dice[0]*100) : console.log(1000 + dice[2]*100);
} else {
  console.log(Math.max(...dice)*100);
}
