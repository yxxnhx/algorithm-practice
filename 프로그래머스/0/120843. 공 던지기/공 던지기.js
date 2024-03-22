function solution(numbers, k) {
    let answer = 1;

    for(i=0; i < k - 1; i++) {
        answer += 2;
        (answer > numbers.length) && (answer -= numbers.length)
    }
    return answer;
}