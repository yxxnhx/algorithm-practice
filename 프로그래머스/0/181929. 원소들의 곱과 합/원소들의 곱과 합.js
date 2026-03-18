function solution(num_list) {
    var answer = 0;
    const total = num_list.reduce((a, b) => a * b)
    const sum = num_list.reduce((a, b) => a + b)
    return total < sum ** 2 ? 1 : 0;
}