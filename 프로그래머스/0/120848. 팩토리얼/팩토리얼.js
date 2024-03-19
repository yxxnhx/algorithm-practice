function solution(n) {
    let answer = 0;
    let factorial = 1;
    for(i=1; i <= n; i++) {
        factorial *= i
        
        factorial <= n ? answer = i : null
    }
    return answer;
}