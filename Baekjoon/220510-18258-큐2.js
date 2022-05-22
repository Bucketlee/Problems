// https://www.acmicpc.net/problem/18258

const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '/example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

// const queue = [];

// for (let i = 1; i < input.length; i += 1) {
//   const len = queue.length;
//   if (input[i] === 'pop') {
//     if (len) {
//       const num = queue.shift();
//       console.log(num);
//     } else {
//       console.log(-1);
//     }
//   } else if (input[i] === 'size') {
//     console.log(len);
//   } else if (input[i] === 'empty') {
//     console.log(len ? 0 : 1);
//   } else if (input[i] === 'front') {
//     console.log(len ? queue[0] : -1);
//   } else if (input[i] === 'back') {
//     console.log(len ? queue[len-1] : -1);
//   } else {
//     queue.push(+input[i].split(' ')[1]);
//   }
// }


// 시간초과로 직접 구현 시도

class Node {
	constructor(value) {
		this.value = value;
		this.next = undefined;
	}
}

class Queue {
	constructor() {
		this.head = undefined;
		this.tail = undefined;
		this.size = 0;
	}

	push(value) {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
		this.size += 1;
	}

	getSize() {
		return this.size;
	}

	pop() {

    if (this.size > 0) {
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) this.tail = undefined;

      this.size -= 1;
      return value;
    }

    return -1;
	}

	empty() {
		return this.size ? 0 : 1;
	}

	front() {
		return this.head ? this.head.value : -1;
	}

	back() {
		return this.tail ? this.tail.value : -1;
	}
}


function solution(n, ) {

}
const queue = new Queue;

for (let i = 1; i < input.length; i += 1) {

  if (input[i] === 'pop') {
    console.log(queue.pop());
  } else if (input[i] === 'size') {
    console.log(queue.getSize());
  } else if (input[i] === 'empty') {
    console.log(queue.empty());
  } else if (input[i] === 'front') {
    console.log(queue.front());
  } else if (input[i] === 'back') {
    console.log(queue.back());
  } else {
    queue.push(+input[i].split(' ')[1]);
  }
}

// 왜 이 풀이도 시간초과가 날까?