const solution = (my_string) =>  {
  my_string =  my_string.match(/[0-9]+/g)
  return !my_string ? 0 : my_string.reduce((a, b) => Number(a) + Number(b), 0) 
};