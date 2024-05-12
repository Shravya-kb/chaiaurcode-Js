//const tinderUser = new Object()//singleton : because we are using new keyword
const tinderUser = {
    id: "123abc",
    name:"Sammy",
    isLoggedIn:"false",
}

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstname +" "+ regularUser.fullname.userFullname.lastname);
console.log(tinderUser);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "h@gmail.com",

    },
    {
        id: 1,
        email: "h@gmail.com",
        
    },
    {
        id: 1,
        email: "h@gmail.com000000000000000",
        
    },
    {
        id: 1,
        email: "h@gmail1111111111111111111.com",
        
    },
    {
        id: 1,
        email: "h@gmail222222222222222222.com",
        
    },
]

console.log(users[4].email);