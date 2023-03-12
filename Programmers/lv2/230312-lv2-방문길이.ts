// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs: string) {
  const roads: { [key: string]: Coordinate } = {}
  const maxAbs = 5
  let currentCoordinate = [0, 0]

  let count = 0
  for (let i = 0; i < dirs.length; i += 1) {
    const key = `${currentCoordinate}`
    if (!roads[key]) {
      roads[key] = new Coordinate(currentCoordinate[0], currentCoordinate[1])
    }
    const road = roads[key]

    if (dirs[i] === 'U' && currentCoordinate[1] !== maxAbs) {
      currentCoordinate[1] += 1
    } else if (dirs[i] === 'D' && currentCoordinate[1] !== maxAbs * -1) {
      currentCoordinate[1] -= 1
    } else if (dirs[i] === 'R' && currentCoordinate[0] !== maxAbs) {
      currentCoordinate[0] += 1
    } else if (dirs[i] === 'L' && currentCoordinate[0] !== maxAbs * -1) {
      currentCoordinate[0] -= 1
    } else {
      continue
    }

    const nextKey = `${currentCoordinate}`
    if (!roads[nextKey]) {
      roads[nextKey] = new Coordinate(
        currentCoordinate[0],
        currentCoordinate[1],
      )
    }

    const nextRoad = roads[nextKey]

    if (!road.hasNode(nextRoad.x, nextRoad.y)) {
      road.addNode(nextRoad.x, nextRoad.y)
      nextRoad.addNode(road.x, road.y)
      count += 1
    }
  }
  return count
}

interface ICoordinate {
  x: number
  y: number
  nodes: [number, number][]
}

class Coordinate implements ICoordinate {
  readonly nodes: [number, number][]
  constructor(readonly x: number, readonly y: number) {
    this.x = x
    this.y = y
    this.nodes = []
  }

  addNode(x: number, y: number) {
    if (!this.isSameCoordinate(x, y) && !this.hasNode(x, y)) {
      this.nodes.push([x, y])
    }
  }

  hasNode(x: number, y: number) {
    for (let i = 0; i < this.nodes.length; i += 1) {
      if (this.nodes[i][0] === x && this.nodes[i][1] === y) {
        return true
      }
    }
    return false
  }

  isSameCoordinate(x: number, y: number) {
    if (x === this.x && y === this.y) {
      return true
    }
    return false
  }
}

// 다른이 풀이

function solution(dirs: string[]) {
  const firstPathMap = new Map()
  let now: [number, number] = [0, 0]
  let moved
  for (let dir of dirs) {
    moved = move(now, dir)
    if (moved[0] < -5 || moved[0] > 5 || moved[1] < -5 || moved[1] > 5) {
      continue
    }
    firstPathMap.set(generateKey(now, moved), true)
    now = moved
  }

  return firstPathMap.size
}

function move(now: [number, number], dir: string): [number, number] {
  switch (dir) {
    case 'L':
      return [now[0] - 1, now[1]]
    case 'R':
      return [now[0] + 1, now[1]]
    case 'U':
      return [now[0], now[1] + 1]
    case 'D':
      return [now[0], now[1] - 1]
    default:
      return now
  }
}

function generateKey(now: [number, number], moved: [number, number]) {
  return `${Math.min(now[0], moved[0])},${Math.max(
    now[0],
    moved[0],
  )},${Math.min(now[1], moved[1])},${Math.max(now[1], moved[1])}`
}
