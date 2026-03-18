function solution(a, b) {
    var answer = 0;
    const ab = a.toString() + b.toString()
    const ba = b.toString() + a.toString()
    
    if (Number(ab) > Number(ba)) {
        answer = Number(ab)
    }
        if (Number(ab) < Number(ba)) {
        answer = Number(ba)
    }
    
           if (Number(ab) === Number(ba)) {
        answer = Number(ab)
    }
     

    return answer;
}