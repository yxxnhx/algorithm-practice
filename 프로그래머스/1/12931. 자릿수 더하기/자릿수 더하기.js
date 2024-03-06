const solution = (n) => {
    return n.toString().split('').reduce((a, b) => {
        return Number(a) + Number(b)}
     , 0)
}