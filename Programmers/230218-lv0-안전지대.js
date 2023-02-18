// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
    const copy = board.slice();
    const len = copy.length;
    for (let row = 0; row < len; row += 1) {
        for (let column = 0; column < len; column += 1) {
            if (copy[row][column] === 1) {
                if (copy[row][column - 1] === 0) {
                    copy[row][column - 1] = -1;
                }
                if (copy[row][column + 1] === 0) {
                    copy[row][column + 1] = -1;   
                }
                 
                if (copy[row - 1]) {
                    if (copy[row - 1][column - 1] === 0) {
                        copy[row - 1][column - 1] = -1;
                    }
                    
                    if (copy[row - 1][column] === 0) {
                        copy[row - 1][column] = -1;
                    }
                    
                    if (copy[row - 1][column + 1] === 0) {
                        copy[row - 1][column + 1] = -1;
                    }
                }
                
                if (copy[row + 1]) {
                    if (copy[row + 1][column - 1] === 0) {
                        copy[row + 1][column - 1] = -1;
                    }
                    if (copy[row + 1][column] === 0) {
                        copy[row + 1][column] = -1;
                    }
                    if (copy[row + 1][column + 1] === 0) {
                        copy[row + 1][column + 1] = -1;
                    }
                }
            }
        }
    }
    
    return copy.reduce((count, d) => {
        return count + d.reduce((acc, cur) => cur === 0 ? acc + 1 : acc, 0);
    }, 0);
}
