function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i += 1) {
      console.log(stack, s[i])
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (s[i] === ')' && stack[stack.length-1] === '(') {
        stack.pop();
      } else if (s[i] === ']' && stack[stack.length-1] === '[') {
        stack.pop();
      } else if (s[i] === '}' && stack[stack.length-1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};

// Runtime: 852 ms, faster than 5.07% of TypeScript online submissions for Valid Parentheses.
// Memory Usage: 52.6 MB, less than 5.07% of TypeScript online submissions for Valid Parentheses.


// 다른이풀이

var isValid = function(s) {
  const stack = [];

  for (let i = 0 ; i < s.length ; i++) {
    let c = s.charAt(i);
    switch(c) {
      case '(': stack.push(')');
        break;
      case '[': stack.push(']');
        break;
      case '{': stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};