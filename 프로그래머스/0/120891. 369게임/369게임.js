function solution(order) {
    let answer = 0;
    order = [...order + '']
    order.map((o) => o == 0 ? false : (o % 3 === 0 ? answer++ : false))
    return answer;
}