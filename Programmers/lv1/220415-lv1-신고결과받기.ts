// https://programmers.co.kr/learn/courses/30/lessons/92334

function getReportResults(id_list: Array<string>, report: Array<string>, k: number): Array<number> {
  const idInfo = {};
  id_list.forEach(name => idInfo[name] = { report: [], number: 0 });

  for (let i = 0; i < report.length; i += 1) {
    const [reporter, target] = report[i].split(" ");
    const isAleadyReported: boolean = idInfo[reporter].report.includes(target);
    if (!isAleadyReported) {
      idInfo[reporter].report.push(target);
      idInfo[target].number += 1;
    }
  }

  const result: Array<number> = [];
  for (let i = 0; i < id_list.length; i += 1) {
    const num: number = idInfo[id_list[i]].report.reduce((pre: number, acc: string): number => {
      if (idInfo[acc].number >= k) {
        pre += 1;
      }
      return pre;
    }, 0);

    result.push(num);
  }

  return result;
}

getReportResults(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2);
getReportResults(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 2);
