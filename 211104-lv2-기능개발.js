// https://programmers.co.kr/learn/courses/30/lessons/42586


function solution(progresses, speeds) {
  const completionPeriodLog = new Array(progresses.length);
  let day = 0;
  while (completionPeriodLog.includes(undefined)) {
    day = day+1;
    progresses.map((progress, i) => {
      const progressResult = progress + speeds[i];

      if (progressResult >= 100 && completionPeriodLog[i] === undefined) {
        completionPeriodLog[i] = day;
        progresses[i] = progressResult;
      } else {
        progresses[i] = progressResult;
      }
    })

    console.log(day, '일차 기록 : ', progresses);
    console.log('completionPeriodLog', completionPeriodLog)
  }
  console.log('completionPeriodLog', completionPeriodLog);

  const distributionLog = [];
  let numberOfFeatures = 1;
  let standardDay = completionPeriodLog[0];
  for (let i = 1; i <= completionPeriodLog.length; i = i+1) {
    console.log(standardDay, completionPeriodLog[i], standardDay >= completionPeriodLog[i])
    if (standardDay >= completionPeriodLog[i]) {
      numberOfFeatures = numberOfFeatures+1;
    } else {
      distributionLog.push(numberOfFeatures);
      numberOfFeatures = 1;
      standardDay = completionPeriodLog[i];
    }
  }

  console.log(distributionLog);

  return distributionLog;
}


// progresses	speeds	return
// [93, 30, 55]	[1, 30, 5]	[2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]

solution([93,30,55],[1,30,5]);
solution([95,90,99, 99, 80, 99],[1,1,1,1,1,1]);

solution([55,60,65],[5, 10, 7]);


