function solution(M, N) {
    const m = M > 0 ? M - 1 : M;
    const n = N > 0 ? (N - 1) * M : N
    
    return m + n;
}