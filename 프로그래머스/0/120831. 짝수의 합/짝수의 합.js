const solution = (n) => {
    let answer = 0;
    
    for(i=0; i <= n; i = i+2) {
      answer = answer + i;
    }
    return answer;
}