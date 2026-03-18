function solution(num_list) {
    const length = num_list.length
    const a = num_list[length-1]
    const b = num_list[length  - 2]
    const result = a > b ? a - b : a *2
    return [...num_list, result];
}