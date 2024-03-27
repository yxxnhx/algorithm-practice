function solution(common) {
    let answer = [];
    const lastNum =  common[common.length - 1] 
        
    for(i=0; i < common.length - 1; i++) {
        answer.push(common[i + 1] - common[i])
    }  
    answer = [...new Set(answer)]


    return answer.length === 1 ? lastNum + answer[0] : lastNum * (answer[1] / answer[0]);
}