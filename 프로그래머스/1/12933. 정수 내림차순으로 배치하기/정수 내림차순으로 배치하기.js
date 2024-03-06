const solution = (n) => {
    const sortNumber = n.toString().split('').sort((a, b) => Number(b) - Number(a)).join('')
    
    return Number(sortNumber)
}