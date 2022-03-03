// https://programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  routes.sort((a, b) => a[0] - b[0]);
  const overlapRoutes = [routes[0]];

  for (let i = 1, len = routes.length; i < len; i +=1 ) {
    let isOverlap = false;

    for (let j = 0; j < overlapRoutes.length; j += 1) {
      if (!isOverlap && overlapRoutes[j][1] >= routes[i][0]) {
        if (overlapRoutes[j][1] >= routes[i][1]) {
          overlapRoutes[j] = routes[i];
        } else {
          overlapRoutes[j] = [routes[i][0], overlapRoutes[j][1]];
        }

        isOverlap = true;
      }
    }

    if (!isOverlap) {
      overlapRoutes.push(routes[i]);
    }
  }
  return overlapRoutes.length;
}

// 다른이 풀이
function solution(routes) {
  var answer = [];
  routes.sort((a, b) => a[1] - b[1]);
  for (let item of routes) {
      if (!checkCam(item, answer)) {
          answer.push(item[1]);
      }
  }

  return answer.length;
}

function checkCam(route, cameras) {
  for (let cam of cameras) {
      if (route[0] <= cam && cam <= route[1]) {
          return true;
      }
  }
  return false;
}
