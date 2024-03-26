function solution(polynomial) {
    var answer = '';
    const filterdX = polynomial.split(' + ').filter((p) => p.includes('x'))
    const countX = filterdX.map((x) => x.split('x')[0] ? Number(x.split('x')[0]) : 1)
    const filterdNum = polynomial.split(' + ').filter((p) => !p.includes('x'))
    let countNum = filterdNum.reduce((a, b) => Number(a) + Number(b), 0)
    let x = (countX.length > 0) && (countX.length === 1 && countX[0] === 1 ? 'x' : `${(countX.reduce((a, b) => a + b))}x`);
    
    return x ? (countNum > 0 ? `${x} + ${countNum}` : `${x}`) : (countNum > 0 && `${countNum}`);
}