function solution(lines) {
    let answer = [];

    lines.forEach(([x, y]) => {
        for(i = x; i < y; i++) {
            answer.push(i)
        }
    })
    
    answer = answer.filter((v) => answer.indexOf(v) !== answer.lastIndexOf(v))
    return [...new Set(answer)].length
}
