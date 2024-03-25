function solution(dots) {
    let xAxis = [];
    let yAxis = [];
    
    dots.map((d) => {
        const [x, y] = d;
        xAxis.push(x)
        yAxis.push(y)
    })

    const x = Math.max(...xAxis) - Math.min(...xAxis)
    const y = Math.max(...yAxis) - Math.min(...yAxis)
    return x * y;
}