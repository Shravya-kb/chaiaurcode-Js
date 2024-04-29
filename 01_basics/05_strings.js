const name = "hitesh";

const repoCount = 50;

//console.log(name+repoCount+" Value ");

console.log(`Hello my name is ${name} and my repo count is${repoCount}`);


const gameName = new String('hitesh-hc-com');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.substring(0,4));//4 is not included. it takes index characters from 0 to 3
console.log(gameName.slice(-8,4));

const newStringOne="   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//Removes all the spaces that exists around the string
console.log(newStringOne.trimStart());// Only emoves the spaces that exists in the starting of the string
console.log(newStringOne.trimEnd());//Only removes the spaces that exists in the end of the string


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes("hitesh"));
console.log(url.includes("sundar"));

console.log(gameName.split('-'));







