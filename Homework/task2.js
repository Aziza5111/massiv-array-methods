let names = ["Nargiza", "Lola", "Sardor", "Ra'no", "Muhammad"];
let longnames = names.filter((name) => name.length > 5);
longnames.sort((a, b) => b.length - a.length);
console.log(longnames);
