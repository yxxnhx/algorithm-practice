const solution = (my_string) => my_string.match(/[0-9]/g).map(num => +num).sort((a, b) => a - b);