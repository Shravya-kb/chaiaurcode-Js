// singleton

//when we decalre spmething in literals then it willl be singleton.

//object literals
const mySym = Symbol("key1");

const JsUser = {
    "full name": "Hitesh",
    age: 18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(mySym);

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser["email"]);

