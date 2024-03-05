const solution = (numbers) => {
    let totalSum = 0;
    
    for(i=0; i <= 9; ++i) {
        totalSum += i
    }
    
    return totalSum - numbers.reduce((a, b) => a + b)
}