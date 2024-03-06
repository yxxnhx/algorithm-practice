function solution(absolutes, signs) {
    let answer = 0;
    
    for(i=0; i < absolutes.length; i++) {
        signs[i] === true ? answer += absolutes[i] : answer -= absolutes[i]
    }
    
    return answer
}