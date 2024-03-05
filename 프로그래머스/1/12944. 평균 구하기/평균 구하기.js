const solution = (arr) => {
    const addNumber = arr.reduce((a, b) => a+b)
    
    return addNumber / arr.length;
}