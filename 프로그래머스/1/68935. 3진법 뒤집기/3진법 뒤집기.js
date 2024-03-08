function solution(n) {
    const decimal = n.toString(3).split('').reverse().join('')

    return parseInt(decimal, 3);
}