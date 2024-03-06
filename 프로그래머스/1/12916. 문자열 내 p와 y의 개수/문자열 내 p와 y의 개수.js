function solution(s){
    const word = s.toLowerCase().split('')
    let pCount = 0;
    let yCount = 0;

    for(i = 0; i < word.length; i++) {
        if(word[i] === 'p') {
            pCount++;
        } else if(word[i] === 'y') {
            yCount++;
        }
    }
    
    return pCount === yCount ? true : false;
}