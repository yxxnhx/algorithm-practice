function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a) {
        answer += ~~(n / a) * b
        n = (~~(n / a) * b) + n % a
    }
    
    return answer;
}