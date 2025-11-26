let arr = [-3, 4, -2, 7, 1];
let positiveArr = arr.filter((num) => num > 0);
let sum = positiveArr.reduce((sum, num) => sum + num, 0);
console.log(sum);