function solution(s) {
    let answer = [];
    s = [...s]
    s.forEach((item) => {
        s.indexOf(item) === s.lastIndexOf(item) && answer.push(item)
    })
    
    return answer.sort().join('');
}