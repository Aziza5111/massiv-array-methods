let bignums = [12, 5, 8, 130, 44];
let filterednums = bignums.filter((num) => num > 10);
let nums = filterednums.some((num) => num > 10);
console.log(nums);
