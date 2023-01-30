// https://school.programmers.co.kr/learn/courses/30/lessons/120823

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input = line.split(' ')
}).on('close', function () {
  const len = Number(input[0])
  for (let i = 1; i <= len; i += 1) {
    console.log('*'.repeat(i))
  }
})
