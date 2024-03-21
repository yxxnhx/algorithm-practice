function solution(my_str, n) {
    let answer = [];
    let slice = 0;
    
    while(my_str.length) {
        if([...my_str].splice(slice, n).length <= 0) break;
        
        answer.push([...my_str].splice(slice, n).join(''))
        slice += n;
    }

    return answer;
}