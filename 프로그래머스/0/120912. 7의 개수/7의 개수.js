function solution(array) {
    let answer = [];
    array.map((a) => {
        a.toString().split('').forEach((s) => {
             s.includes('7') && answer.push(s)
        })
       
    })
    return answer.length;
}