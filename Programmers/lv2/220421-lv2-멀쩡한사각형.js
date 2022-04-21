// https://programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h)  {
  return w > h ? getHealthyRectangles(w, h) : getHealthyRectangles(h, w);
}

function getHealthyRectangles(big, small) {
  let nonRectangles = 0;
  let oldSmallRatio = 0;

  for (let i = 1; i <= big; i += 1) {
    const newSmallRatio = small/big*i;

    nonRectangles += Math.ceil(newSmallRatio) - Math.floor(oldSmallRatio);

    oldSmallRatio = newSmallRatio;
  }
  console.log(nonRectangles);
  return big*small - nonRectangles;
}


// 다른이 풀이

function solution(w,h){
  const slope = h / w;
  let result = 0;

  for(let i = 1; i <= w; i++){
      result += Math.ceil(slope * i);
  }

  return ((h * w) - result) * 2;
}
