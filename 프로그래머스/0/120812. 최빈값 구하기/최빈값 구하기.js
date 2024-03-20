function solution(array) {
    let map = new Map();
    
    for(let a of array) {
    /* map 활용해서 풀기
    map.set(key, value):  key를 이용해 value 저장
    map.get(key): key에 해당하는 값을 반환, key가 존재하지 않으면 undefined 반환 
    => array의 각각 요소를 key로 가져오고, value로 몇개 있는지 확인 기본으로 1개는 카운트 해야하니까 +1 하기
    콘솔 찍어보면 [1, 2, 3, 3, 3, 4]일 경우 map에 { 1 => 1, 2 => 1, 3 => 3, 4 => 1 } 로 들어와있음 */
        map.set(a, (map.get(a) || 0)+1)
    }
    map = [...map].sort((a, b) => b[1] - a[1])

    return map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1
}