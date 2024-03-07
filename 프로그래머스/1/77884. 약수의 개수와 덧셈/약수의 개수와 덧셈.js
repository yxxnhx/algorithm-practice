function solution(left, right) {
    let answer = 0;

    
    for(i = left; i <= right; i++) {
        let isInteger = Number.isInteger(Math.sqrt(i))
        
        isInteger ? answer -= i : answer += i
    }

    return answer;
}