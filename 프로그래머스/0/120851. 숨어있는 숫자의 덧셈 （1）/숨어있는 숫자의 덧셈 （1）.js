function solution(my_string) {
    const isNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const findNumber = my_string.split('').filter((s) => isNumber.includes(s) )

    return findNumber.reduce((a, b) => Number(a) + Number(b), 0);
}