
function solution(n, words) {
  const spokenWords = [];
  const result = [0, 0];

  spokenWords.push(words[0]);
  words.reduce((pre, word, i, arr) => {
    spokenWords.push(word);

    if (pre[pre.length-1] !== word[0] || spokenWords.indexOf(word) !== spokenWords.lastIndexOf(word)) {
      result[0] = spokenWords.length%n === 0 ? n : spokenWords.length%n;
      result[1] = spokenWords.length%n === 0 ? spokenWords.length/n : Math.floor(spokenWords.length/n + 1);
      arr.splice(1);
    }
    return word;
  });

  return result;
}


// 다른이풀이

function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}