function solution(phone_number) {
    let answer = '';
    const astar = '*'.repeat(phone_number.length - 4);
    answer = astar + phone_number.slice(-4)
    return answer;
}