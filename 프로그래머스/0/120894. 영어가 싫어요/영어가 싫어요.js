function solution(numbers) {
    const num = ['zero', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    num.map((n, i) => {
        numbers = numbers.replaceAll(num[i], i)
    })
    return Number(numbers);
}