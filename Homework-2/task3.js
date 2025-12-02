let arr = [3, 6, 7, 1, 8, 11];
let bigfromfive = arr.filter((num) => num > 5);
let doubled = bigfromfive.map((num) => num ** 2);
console.log(doubled);
