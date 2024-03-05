function solution(x, n) {
    let answer = [];
    for(i = x; answer.length < n; i += x) {
        answer.push(i)
    }

    return answer;
}