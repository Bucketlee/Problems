// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw: [string, string], db: [string, string][]) {
  for (let i = 0; i < db.length; i += 1) {
    if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
      return 'login'
    }

    if (id_pw[0] === db[i][0]) {
      return 'wrong pw'
    }
  }

  return 'fail'
}

// 다른이 풀이

function solution(id_pw: [string, string], db: [string, string][]) {
  const [id, pw] = id_pw
  const map = new Map(db)
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail'
}
