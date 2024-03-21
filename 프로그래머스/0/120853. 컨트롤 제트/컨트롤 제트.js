function solution(s) {
    let array = []
    
    // Z인 요소를 찾아서 바로 앞에 있는 요소 삭제하기
    s.split(' ').forEach((item, index) => {
        item === 'Z' ? array.pop() : array.push(+item)
    })

    return array.reduce((a, b) => a + b, 0);
}