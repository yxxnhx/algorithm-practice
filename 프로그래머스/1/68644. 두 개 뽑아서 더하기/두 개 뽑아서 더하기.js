function solution(numbers) {
    let answer = [];

    for(i=0; i < numbers.length; i++) {
        for(j=1+i; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
        }
    }
    return [...new Set(answer.sort((a, b) => a - b))];
}