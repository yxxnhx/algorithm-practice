function solution(array, n) {
    const abs = array.sort((a, b) => a - b).map((a) => Math.abs(a - n))
    return array[abs.indexOf(Math.min(...abs))];
}