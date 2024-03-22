function solution(sides) {
    const [min, max] = sides.sort((a, b) => a - b)

    return min * 2  - 1
}