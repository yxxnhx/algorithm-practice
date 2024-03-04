const solution = (age) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    
    return currentYear - age - 1;
}