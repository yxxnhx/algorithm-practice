function solution(x) {
    const addNumber = (x + '').split('').reduce((a, b) => Number(a) + Number(b))    

    return x % addNumber === 0 ? true : false
}