// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  const numbersTree = new Tree(0);

  function getTreeNumberCases(nums, tree) {
    const positiveNum = new Tree(nums[0]);
    const negativeNum = new Tree(-nums[0]);
    tree.addChild(positiveNum, negativeNum);

    if (nums.length !== 1) {
      const newNums = nums.slice(1);
      getTreeNumberCases(newNums, positiveNum);
      getTreeNumberCases(newNums, negativeNum);
    }
  }

  getTreeNumberCases(numbers, numbersTree);

  let result = 0;
  function addNumbersWithDFS(tree, value) {
    value += tree.value;

    if (tree.children.length > 0) {
      tree.children.forEach(tree => addNumbersWithDFS(tree, value));
    } else {
      if (value === target) {
        result += 1;
      }
    }
  }

  addNumbersWithDFS(numbersTree, 0);

  return result;
}

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(...tree) {
    this.children.push(...tree);
  }
}


// 다른이 풀이
function solution(numbers, target) {
  let answer = 0;
  getAnswer(0,0);
  function getAnswer(x,value) {
    if(x<numbers.length){
      getAnswer(x+1,value + numbers[x]);
      getAnswer(x+1,value - numbers[x]);
    } else{
      if(value === target){
        answer++
      }
    }
  }
  return answer;
}


// Tree 구조로 푼 다른 답
function solution(numbers, target) {
  var answer = 0;
  var answer = 0;

  let root = new BinarySearchTree();
  root.insert(0);
  numbers.forEach(function(val) {
    root.insert(val);
  });

  answer = root.DFSPreOrder(target);
  return answer;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      function traverse(node) {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        if(node.left === null) {
          let leftNode = new Node(-value);
          let rightNode = new Node(value);
          node.left = leftNode;
          node.right = rightNode;
        }
      }
      traverse(current);
      return this;
    }
  }
  DFSPreOrder(target) {
    let count = 0;
    let data = 0;
    let current = this.root;
    function traverse(node) {
      data = data + node.value;
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      if(node.left === null) {
        if(data === target) {
          count++;
        }
      }
      data = data - node.value;
    }
    traverse(current);
    return count;
  }
}