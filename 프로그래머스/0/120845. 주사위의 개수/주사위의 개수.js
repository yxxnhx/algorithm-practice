function solution(box, n) {
    let answer = 1;
    box.map((b) => answer *= ~~(b /n))
    return answer;
}