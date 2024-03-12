function solution(array, commands) {
    let answer = [];
    commands.map((a, i) => {
        const slice = array.slice(a[0]-1, a[1]).sort((a, b) => a - b)
        answer.push(slice[a[2]-1])
    })
    
    return answer;
}