const solution = (my_string, letter) => {
    let answer = '';
    answer = [...my_string].filter((s) => s !== letter).join('')
    
    return answer;
}