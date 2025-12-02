let Evennums = [-1, 3, -6, 5, 6, -9, 2];
let positivenums = Evennums.filter(num => num > 0);
let sum = positivenums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
