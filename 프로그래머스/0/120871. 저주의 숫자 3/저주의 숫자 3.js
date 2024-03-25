function solution(n) {
    for(i=1; i <=n; i++) {
        (i % 3 === 0 ||  i.toString().includes(3)) && (n += 1)
    }
    return n;
}