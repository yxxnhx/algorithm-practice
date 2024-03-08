function solution(s, n) {
    const LOWER_MAX_CODE = 122;
    const LOWER_MIN_CODE = 97;
    const UPPER_MAX_CODE = 65;
    const UPPER_MIN_CODE = 90;
    
    let result = s.split('').map((string) => {
        const code = string.charCodeAt();
        
        if(LOWER_MIN_CODE <= code && code <= LOWER_MAX_CODE){
            return String.fromCharCode((code + n - LOWER_MIN_CODE) % 26 + LOWER_MIN_CODE)
        }

        if(UPPER_MAX_CODE <= code && code <= UPPER_MIN_CODE){
            return String.fromCharCode((code + n - UPPER_MAX_CODE) % 26 + UPPER_MAX_CODE)
        }
        
        return ' '
    })

    return result.join('')
}