function solution(n, k) {
    const FOOD = 12000;
    const DRINK = 2000;
    let count = Math.floor(n / 10)

    return n * FOOD + (k - count) * DRINK;
}