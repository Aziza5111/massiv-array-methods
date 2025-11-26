let names = ["Ali", "Siroj", "Lola", "Samar"];
let longnames = names.filter((n) => n.length > 4);
let add = longnames.map((n) => n +  " Hello");
console.log(add);
