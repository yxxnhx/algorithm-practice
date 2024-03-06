function solution(n) {
    let isInteger = Math.sqrt(n)
    
    return isInteger % 1 === 0 ? Math.pow(isInteger + 1, 2) : -1;
}