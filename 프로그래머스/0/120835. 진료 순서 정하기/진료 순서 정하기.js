function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a)

    return emergency.map((e) => sorted.indexOf(e)+1);
}