function solution(score) {
    const avg = score.map((s) => {
        const [eng, math] = s;
        return (eng + math) / 2
    })
    
    const sortedAvg = [...avg].sort((a, b) => b - a)

    return avg.map(a => sortedAvg.indexOf(a) + 1);
}