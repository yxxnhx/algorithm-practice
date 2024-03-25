function solution(id_pw, db) {
    let answer = '';
    const [id, pw] = id_pw;
    
    db.some(([dbId, dbPw]) => {
        if(dbId === id) {
            answer = dbPw === pw ? 'login' : 'wrong pw'
            return true;
        } else {
            answer ='fail'
            return false;
        }
    })
    return answer;
}