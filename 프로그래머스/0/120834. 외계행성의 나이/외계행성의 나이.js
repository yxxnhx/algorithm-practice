function solution(age) {
    let answer = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    age.toString().split('').filter((a) => answer.push(alphabet[a]))
    return answer.join('');
}