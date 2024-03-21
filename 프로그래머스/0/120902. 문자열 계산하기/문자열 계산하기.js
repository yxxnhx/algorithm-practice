function solution(my_string) {
    my_string = my_string.split(' ')
    let answer = +my_string[0];
    
    my_string.forEach((m, i) => {
        let nextNum = Number(my_string[i+1])
        
        m === '+' ? answer += nextNum : m === '-' ? answer -= nextNum : nextNum
    })

    return answer;
}