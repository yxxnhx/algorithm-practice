function solution(my_string, n) {
    let answer = [];
    my_string.split('').forEach((s) => answer.push(s.repeat(n)))
    return answer.join('');
}