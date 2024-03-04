const solution = (angle) => {
    if (angle > 180 || angle <= 0) return;
    
    let answer;
    
    if(angle < 90) {
        answer = 1
    } else if(angle === 90) {
        answer = 2
    } else if(angle < 180) {
         answer = 3
    } else {
         answer = 4
    }
    return answer;
}