function solution(babbling) {
    const baby = babbling.map((word) => word.replaceAll(/aya|ye|woo|ma/gi, ''))

    return baby.filter((b) => b === '').length;
}