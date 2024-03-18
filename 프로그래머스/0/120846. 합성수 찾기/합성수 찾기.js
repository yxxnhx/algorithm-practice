function solution(n) {
    let answer = [];

    if(n < 3) return 0

    for(i=4; i <= n; i++) {
        for(j=2; j <i; j++) {
            i % j === 0 ? answer.push(i) : null
        } 
    }
    return [...new Set(answer)].length;
}