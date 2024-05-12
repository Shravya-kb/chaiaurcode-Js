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

console.log(tinderUser);//Output:{ id: '123abc', name: 'Sammy', isLoggedIn: 'false' }

console.log(Object.keys(tinderUser));// OUTPUT:[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//OUTPUT:[ '123abc', 'Sammy', 'false' ]
console.log(Object.entries(tinderUser));//OUTPUT:[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', 'false' ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn'));//OUTPUT:true
console.log(tinderUser.hasOwnProperty('isLogged'));//OUTPUT:false

//Advanced OBJECTS CONCEPTS

const course= {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor

let {courseInstructor} = course;
courseInstructor = "something";//OUTPUT:something
console.log(courseInstructor);
console.log(course.courseInstructor);//OUTPUT:hitesh
const{courseInstructor:Instructor}=course;//Here we are giving Instructor as a new name to courseInstructor.
console.log(Instructor);//OUTPUT: hitesh

const{coursename}=course;//here course is the object from which coursename key is called
console.log(coursename);//OUTPUT:JS in hindi

