let bignums = [1, 5, 8, 3, 4];
let nums = bignums.some((num) => num > 10);
if (nums) {
  let filterednums = bignums.filter((num) => num > 10);
  let sortednums = filterednums.sort((a, b) => a - b);
  console.log(sortednums);
} else {
  console.log("no numbers greater than 10");
}
