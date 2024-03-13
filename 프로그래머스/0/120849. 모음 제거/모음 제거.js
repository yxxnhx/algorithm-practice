function solution(my_string) {
    const VOWEL = ['a', 'e', 'i', 'o', 'u']

    return my_string.split('').filter((s) => !VOWEL.includes(s)).join('');
}