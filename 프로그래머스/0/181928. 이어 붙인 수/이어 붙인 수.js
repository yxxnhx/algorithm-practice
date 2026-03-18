function solution(num_list) {
    const even = num_list.filter((number) =>  number % 2 === 0)
    const odd = num_list.filter((number) =>  number % 2 !== 0)
    return Number(even.join('')) + Number(odd.join(''));
}