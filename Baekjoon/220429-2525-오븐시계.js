const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const currentTime = input[0].split(' ');
const currentMin = (+currentTime[0])*60 + (+currentTime[1]);

let finishMin = currentMin + (+input[1]);

while (finishMin >= 1440) {
  finishMin -= 1440;
}

console.log(`${parseInt(finishMin/60)} ${finishMin%60}`);

/**
// 다른이 풀이

const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
const now = input[0].split(" ").map((item) => +item);

const needTime = +input[1];

function solution(now, needTime) {
  let time = [now[0], now[1] + needTime];
  if (time[1] >= 60) {
    time[0] += Math.floor(time[1] / 60);
    time[0] %= 24;
    time[1] %= 60;
  }
  console.log(time.join(" "));
}

solution(now, needTime);
*/
