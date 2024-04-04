function solution(name, yearning, photo) {
    let score = {};
    
    name.map((key, index) => score[key] = yearning[index])
    
    return photo.map(group => group.reduce((acc, n) => acc + (score[n] || 0), 0));
}