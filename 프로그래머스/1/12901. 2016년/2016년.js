function solution(a, b) {
    const day = new Date(`2016-${a}-${b}`).getDay()

    switch(day) {
        case 0 : answer = 'SUN'; break;
        case 1 : answer = 'MON'; break;
        case 2 : answer = 'TUE'; break;
        case 3 : answer = 'WED'; break;
        case 4 : answer = 'THU'; break;
        case 5 : answer = 'FRI'; break;
        case 6 : answer = 'SAT'; break;
    }

    return answer;
}