// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;

const scoreValue=100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId =Symbol('123');

console.log(id===anotherId);

const bigNumber = 3456679768989787878989n

console.log(bigNumber);

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga" ];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction= function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);//bigint
console.log(typeof myFunction);//function




//Reference (Non primitive)

//Array, Objects, Functions


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYouTubename="hiteshchoudharydotcom"

let anothername= myYouTubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Stack stores the variable value 
// heap stores the reference to the value
