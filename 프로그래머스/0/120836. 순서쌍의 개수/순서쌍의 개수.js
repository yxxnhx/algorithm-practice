function solution(n) {
    let answer = 0;
    
    for(i=1; i <=n; i++) {
        n % i === 0 ? answer++ : null
    }
    
    return answer;
}