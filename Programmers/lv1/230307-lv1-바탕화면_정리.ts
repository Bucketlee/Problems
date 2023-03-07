// https://school.programmers.co.kr/learn/courses/30/lessons/161990#

function solution(wallpaper: string[]) {
  let top = wallpaper.length - 1
  let left = wallpaper[0].length - 1
  let bottom = 0
  let right = 0

  for (let i = 0; i < wallpaper.length; i += 1) {
    const wall = wallpaper[i]
    for (let j = 0; j < wall.length; j += 1) {
      if (wall[j] === '#') {
        if (i < top) {
          top = i
        }
        if (bottom < i) {
          bottom = i
        }
        if (j < left) {
          left = j
        }
        if (right < j) {
          right = j
        }
      }
    }
  }

  return [top, left, bottom + 1, right + 1]
}
