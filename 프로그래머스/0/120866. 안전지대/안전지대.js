function solution(board) {
    const bomb = [[0, 0], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    let bombSet = new Set();

    const find = (i, j) => {
        return bomb.forEach((el) => {
            let [nextX, nextY] = el;
            [nextX, nextY] = [i + nextX, j + nextY];
            if (nextX >= 0 && nextX < board.length && nextY >= 0 &&nextY < board[i].length) {
                bombSet.add(nextX + " " + nextY);
            }
        });
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                find(i, j)
            }
        }
    }
    return board.length ** 2 - bombSet.size;
}
