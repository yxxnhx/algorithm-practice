function solution(keyinput, board) {
    let xResult = 0;
    let yResult = 0;
    const [x, y] = board;
    const xMax = (x / 2);
    const yMax = (y / 2);
    
    for(let key of keyinput) {
        switch(key) {
            case 'left' : (xResult - 1 > -xMax) && xResult--; break;
            case 'right' : (xResult + 1 < xMax) && xResult++; break;
            case 'down' : (yResult - 1 > -yMax) && yResult--; break;
            case 'up' : (yResult + 1 < yMax) && yResult++; break;
        }
    }
    return [xResult, yResult];
}