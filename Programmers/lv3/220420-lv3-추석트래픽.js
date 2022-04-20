// https://programmers.co.kr/learn/courses/30/lessons/17676

function solution(lines) {
  const startTraffic = [];
  const endTraffic = [];
  lines.forEach(line => {
    const [date, time, workingTime] = line.split(" ");

    const endMs = convertTimeToMs(time);
    const startMs = endMs - ((+workingTime[0])*1000 + (+workingTime.slice(2, workingTime.length-1))) + 1;

    startTraffic.push(startMs);
    endTraffic.push(endMs);
  });

  let max = 0;
  for (let i = 0; i < endTraffic.length; i += 1) {
    let traffic = 0;
    for (let j = 0; j < endTraffic.length; j += 1) {
      if (endTraffic[i] <= endTraffic[j] && startTraffic[j] < endTraffic[i] + 1000) {
        traffic += 1;
      }

      if (max < traffic) {
        max = traffic;
      }
    }
  }

  console.log(max);
  return max;
}

function convertTimeToMs(time) {
  const [t, ms] = time.split(".");
  const [hour, min, sec] = t.split(":");
  const totalMs = (+hour)*60*60*1000 + (+min)*60*1000 + (+sec)*1000 + (+ms);
  return totalMs;
}

solution(["2016-09-15 20:59:57.421 0.351s", "2016-09-15 20:59:58.233 1.181s", "2016-09-15 20:59:58.299 0.8s", "2016-09-15 20:59:58.688 1.041s", "2016-09-15 20:59:59.591 1.412s", "2016-09-15 21:00:00.464 1.466s", "2016-09-15 21:00:00.741 1.581s", "2016-09-15 21:00:00.748 2.31s", "2016-09-15 21:00:00.966 0.381s", "2016-09-15 21:00:02.066 2.62s"]);
