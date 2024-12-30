let name = "Manas";
let repoCount = 50;

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("blackJack");

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('J'));

const newStr = gameName.substring(0,5);
console.log(newStr);

const anotherStr = gameName.slice(-9,4);
console.log(anotherStr);

const newStr1 = "        Manas.          ";
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://manas.com/manas%20mishra";
console.log(url);
console.log(url.replace('%20' , '-'));
console.log(url.includes('manas'));
console.log(url.split('%20'));
