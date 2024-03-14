function solution(my_string) {
    const asc = my_string.split('').map((s) => s.charCodeAt())

    return asc.map((a) => a >= 97 ? String.fromCharCode(a - 32) :  String.fromCharCode(a + 32)).join('');
}