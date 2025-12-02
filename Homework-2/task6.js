let arr = [1, 2, 3, 4, 5];
let oddindexof = arr.filter((num, index) => index % 2 === 1);
let map = oddindexof.map((num) => num * 2);
console.log(map);
