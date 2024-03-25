function solution(quiz) {
    let answer = [];
    
    quiz.map((q) => {
        const [calc, result] = q.split(' = ')
        const operation = calc.includes(' - ') ? -1 : 1;
        const [left, right] = calc.split(operation === -1 ? ' - ' : ' + ')
        
        answer.push(Number(left)  + Number(right) * operation === Number(result) ? 'O' : 'X')
    })
    return answer;
}