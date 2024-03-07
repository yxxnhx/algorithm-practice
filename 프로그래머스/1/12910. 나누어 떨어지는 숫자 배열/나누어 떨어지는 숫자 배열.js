function solution(arr, divisor) {
    const divide = arr.filter((f) => f % divisor === 0).sort((a, b) => a - b)

    return divide.length === 0 ? [-1] : divide
}