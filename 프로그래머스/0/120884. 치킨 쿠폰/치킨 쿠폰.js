function solution(chicken) {
    let answer = 0;
    let ch = chicken
    const CUPON = 10;
    
    while(ch > 9) {
        answer += ~~(ch / CUPON);
        ch = ~~((ch / CUPON) + (ch % CUPON))
    }

    return answer;
}