function solution(s) {
    let answer = '';
    const splitWord = s.split(' ');
    
    for(i = 0; i < splitWord.length; i++) {
        for(j = 0; j < splitWord[i].length; j++) {
            j % 2 === 0 ? answer += splitWord[i][j].toUpperCase() : answer += splitWord[i][j].toLowerCase()
        }
        if(i < splitWord.length -1) answer += ' '
    }
    
    return answer;
}
