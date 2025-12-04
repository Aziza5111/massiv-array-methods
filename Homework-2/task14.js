let arr = [5, 4, 3, 8, 0];
let newArr = arr.map((item, i) => {
  arr[i + 1] = arr[i + 1] - arr[i + 2];
});

console.log(arr);
