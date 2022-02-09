function solution(genres, plays) {
  var result = [];

  const playsAndIndexByGenres = getPlaysAndIndexByGenre(genres, plays);
  const playedGenreRank = getPlayedGenreRank(genres, plays);

  for (let i = 0; i < playedGenreRank.length; i = i+1) {
      result = [...result, ...getMostPlaysByGenreTwoIndex(playsAndIndexByGenres[playedGenreRank[i]][0], playsAndIndexByGenres[playedGenreRank[i]][1])];
  }

  return result;
}

function getPlaysAndIndexByGenre(genres, plays) {
  const result = {};
  genres.forEach((genre, i) => {
      if (!result[genre]) {
          result[genre] = [[plays[i]], [i]];
      } else {
          result[genre] = [[...result[genre][0], plays[i]], [...result[genre][1], i]];
      }
  });
  return result;
}

function getPlayedGenreRank(genres, plays) {
  const genrePlays = {};
  genres.forEach((genre, i) => {
      if (!genrePlays[genre]) {
          genrePlays[genre] = plays[i];
      } else {
          genrePlays[genre] = genrePlays[genre] + plays[i];
      }
  });

  const rank = [];
  const values = Object.values(genrePlays);
  const keys = Object.keys(genrePlays);

  for (let i = 0; i < keys.length; i = i+1) {
      let mostValueIndex = values.indexOf(Math.max(...values));
      rank.push(keys[mostValueIndex]);
      values[mostValueIndex] = 0;
  }

  return rank;
}

function getMostPlaysByGenreTwoIndex(plays, index) {
  if (plays.length === 1) {
      return index;
  }

  const mostPlaysByGenre = 0;
  const secondPlaysByGenre = 0;

  let mostValueIndex = plays.indexOf(Math.max(...plays));
  const mostPlaysIndex = index[mostValueIndex];

  plays[mostValueIndex] = 0;
  mostValueIndex = plays.indexOf(Math.max(...plays));
  const secondPlaysIndex = index[mostValueIndex];

  return [mostPlaysIndex, secondPlaysIndex];
}


// 다른이 풀이

function solution(genres, plays) {
  var dic = {};
  genres.forEach((t,i)=> {
      dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];
  });

  var dupDic = {};
  return genres
        .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
        .sort((a,b)=>{
             if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
             if(a.count !== b.count) return b.count - a.count;
             return a.index - b.index;
         })
         .filter(t=>  {
             if(dupDic[t.genre] >= 2) return false;
             dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
             return true;
          })
         .map(t=> t.index);
}