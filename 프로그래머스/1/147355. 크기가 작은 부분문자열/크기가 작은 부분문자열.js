function solution(t, p) {
    let answer = 0;
    
    for(i=0; i < t.length - p.length + 1; i++) {
        let num = t.slice(i, i + p.length)
        
        parseInt(num) <= parseInt(p) ? answer++ : ''
    }
    
    
    return answer;
}