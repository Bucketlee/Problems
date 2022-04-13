// 22년 4월 14일 풀이

function removeStringByPair(s: string): number {
  if (s.length%2) return 0;

  let target: string = s[0];
  const storage: Array<string> = [];

  for (let i = 1; i < s.length; i += 1) {
    if (target === s[i]) {
      const len: number = storage.length;
      if (len) {
        target = storage[len-1];
        storage.pop();
      } else {
        target = s[i];
      }
    } else {
      storage.push(target);
      target = s[i];
    }
  }

  return storage.length ? 0 : 1;
}

console.log(removeStringByPair("baabaa"));
console.log(removeStringByPair("cdcd"));
console.log(removeStringByPair("babbacdffdggddcb"));
console.log(removeStringByPair("a"));