// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];
  return babbling.reduce((count, target) => {
    const result = isComposedOnlyOfWords(target, words);
    return result ? count + 1 : count;
  }, 0);
}

function isComposedOnlyOfWords(target, words) {
  const convertedWord = words.reduce((before, word) => before.replace(word, ' '), target);

  return convertedWord.replaceAll(' ', '') === '' ? true : false;
}


// 다른이 풀이

function solution(babbling) {
  const wordSet = new Set(["aya", "ye", "woo", "ma"])
  let result = 0;

  for(const word of babbling) {
    let remainWord = '';
    let prevWord = '';
    for(const char of word) {
      remainWord += char;
      if(wordSet.has(remainWord)) {
        if(remainWord === prevWord) break;
        prevWord = remainWord
        remainWord = ''
      }
    }
    if(remainWord === '') result++
  }
  return result;
}
