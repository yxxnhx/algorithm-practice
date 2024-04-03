function solution(k, score) {
    let answer = [];
    let honorList = []
    
    score.forEach((s, i) => {
        honorList.sort((a, b) =>  b - a)
        i < k && honorList.push(s)
        Math.min(...honorList) < s && (honorList.pop(), honorList.push(s))
            
        answer.push(Math.min(...honorList))
    })
    
    return answer
}