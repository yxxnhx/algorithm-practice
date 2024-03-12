function solution(food) {
    let answer = [];
    food.map((f, i) => {
        f > 1 ? answer.push(i.toString().repeat(~~ f/2)) : ''
    })
    
    return answer.join('') + '0' + answer.reverse().join('');
}