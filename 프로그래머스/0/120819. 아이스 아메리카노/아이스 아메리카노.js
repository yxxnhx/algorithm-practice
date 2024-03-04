const solution = (money) => {
    let answer = [];
    let coffee = 5500;
    
    const avg = Math.floor(money / coffee);
    const charge = money - (coffee * avg)
    
    answer.push(avg, charge)
    
    return answer;
}