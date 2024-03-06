function solution(n) {
    return n.toString().split('').map(string => Number(string)).reverse()
}