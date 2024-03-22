function solution(n) {
    let answer = [];
        let num = 2;
    
    while(n !== 1) {
        n % num === 0 ? (answer.push(num), n /= num, num = 2) : num += 1
    }
    
    return [... new Set(answer)];
}