function solution(balls, share) {
    const factorial = (num) => balls === share ? 1 : ((num != 1) ? num * factorial(num - 1) : 1)
    const answer = factorial(balls) / (factorial(balls - share) * factorial(share))
    
    return Math.round(answer);
}