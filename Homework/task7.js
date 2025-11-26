let arr = [0, 4, 0, 6, 10];
let nonZeroArr = arr.filter((num) => num !== 0);
let average = nonZeroArr.reduce((sum, num) => sum + num, 0) / nonZeroArr.length;
console.log(average);
