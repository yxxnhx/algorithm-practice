const change = (n, arr) => {
    return '0'.repeat(n - arr.toString(2).length) + arr.toString(2)
}

const solution = (n, arr1, arr2) => {
    let answer = [];

   arr1.map((a, i) => {
        answer.push(change(n, a|arr2[i]).replace(/0/g,' ').replace(/1/g,'#'))
    })

    return answer;
}
