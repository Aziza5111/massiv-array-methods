let arr = [5, 4, 3, 8, 0, 7];
if (arr.length % 2 === 0) {
  let arrF = arr.slice(0, arr.length / 2);
  let arrS = arr.slice(arr.length / 2);

  console.log(arrF); // [5, 4, 3]
  console.log(arrS); // [8, 0, 7]
} else {
  console.log("array toq elementli");
}
