function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  console.log("정렬된 jobs", jobs);
  let reqMs = 0;
  let totalMs = 0;
  let len = jobs.length;

  let possibleJobs = [];

  function doOneJob() {
      if (possibleJobs.length === 0) {
          reqMs += 1;
      } else {
          possibleJobs.sort((a, b) => a[1] - b[1]);
          console.log("possibleJobs 정렬시킴", possibleJobs);
          const [req, job] = possibleJobs.shift();
          console.log(req, job);
          reqMs += job;
          totalMs += reqMs - req;
          console.log("job 온료 후 reqMs", reqMs, "totalMs", totalMs);
      };

  }

  for (let i = 0; i < len; i = i+1) {
    console.log("reqMs", reqMs)
    console.log("totalMs", totalMs)
    console.log("possibleJobs", possibleJobs);
      if (reqMs >= jobs[i][0]) {
          console.log("reqMs >= jobs[i][0]")
          possibleJobs.push(jobs[i]);
          console.log("possibleJobs", possibleJobs);
      } else {
        console.log("reqMs < jobs[i][0]")
          while (reqMs < jobs[i][0]) {
              doOneJob();
          }
          console.log("상황 종료 후 jobs", possibleJobs);
          possibleJobs.push(jobs[i]);
          console.log("push하고", possibleJobs)
      }
  }

  while (possibleJobs.length > 0) {
      doOneJob();
  }

  return Math.floor(totalMs/len);
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));
// console.log(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]));


// 다른이 풀이
// 딱히 좋아요 많이 받은 답변이 없음
function solution(jobs) {
    let total = jobs.length
    let answer = 0
    let tick =0
    let queue=[]
    while(true){
        // 1. (jobs가 있을 때) tick보다 같거나 작은 작업 모두 추출 후 queue에 삽입
        let index = 0;
        while(true){
            if(index >= jobs.length) break;
            if(jobs[index][0] <= tick){
            // 요청이 들어온 작업
                queue.push(jobs.splice(index,1)[0])
            }else{
            // 요청 전 작업
                index++;
            }
        }


        // 3. queue와 jobs가 0이면 끝
        if(queue.length===0 ){
             if(jobs.length ===0){
                 break;
             }else{
                tick++;
             }
        }else{
             // 2. (queue가 있을 때) queue에서 작업량이 가장 작은 작업 수행
        let minIndex = 0;
        for(let i = 1 ; i < queue.length ; i++){
            if(queue[minIndex][1] > queue[i][1]) minIndex=i
        }

        // 2.1 수행한 시간 만큼 tick 증가
        tick += queue[minIndex][1]

        // 2.2 answer += tick - 수행한 작업의 작업 처리 요청 시간
        answer += tick - queue[minIndex][0]

        // 2.3 queue에서 해당 job 삭제
        queue.splice(minIndex,1)

        }
    }

    return Math.floor(answer/total);
}

// 덕원이형 풀이
