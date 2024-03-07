// function solution(d, budget) {
//     let count = 0;
//     let sum = 0
//     d.sort((a, b) => a - b)
    
//     for(i=0; i<d.length; i++) {
//         count++;
//         sum += d[i]
        
//         if(sum > budget) count--;
        
//     }
//     return count
// }

const solution = (d, budget) => {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) {
      d.pop();
    }
    
    return d.length
}