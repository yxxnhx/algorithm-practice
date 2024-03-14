function solution(cipher, code) {
    let answer = [];
    for(i=code - 1; i<=cipher.length; i = i+code) {
        answer.push(cipher[i])
    }

    return answer.join('');
}