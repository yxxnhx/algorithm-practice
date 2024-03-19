function solution(i, j, k) {
    let answer = 0;
    for(x=i; x <=j; x++) {
        String(x).split('').map((s) => s.includes(k) && answer++)
    }
    return answer;
}