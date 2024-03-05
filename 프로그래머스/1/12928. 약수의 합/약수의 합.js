const solution = (n) => {
    let answer = 0;
    
    for(i=0; i<=n; i++) {
        const isDivide = n % i === 0

        if(isDivide) {
            answer += i;
        }
    }
    
    return answer;
}