//const tinderUser = new Object()//singleton : because we are using new keyword
const tinderUser = {
    id: "123abc",
    name:"Sammy",
    isLoggedIn:"false",
}

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname);
console.log(tinderUser);
