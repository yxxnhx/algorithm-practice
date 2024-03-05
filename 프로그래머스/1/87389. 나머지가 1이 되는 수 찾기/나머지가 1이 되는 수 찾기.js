const solution = (n) => {
    let answer = 0;
    for(x=0; x<n; x++) {
        if(n % x === 1) {
            answer = x;
            break;
        }
    }
    
    return answer;
}