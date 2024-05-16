const userEmail = "h@hitesh.ai";

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");

}

//OUTPUT:Got user email

//FALSY VALUES:
/*
false, 0, -0, BigInt 0n, "",null, undefined, NaN

//TRUTHY VALUES
true,"0",'false'," ", [],{},function(){}

*/ 
if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
//OUTPUT: Object is empty
/*
false==0
Output: true
false==''
Output: true
0==''
Output: true
*/ 

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1 = 5 ?? 10//OUTPUT:5
//val1 = null ?? 10 //OUTPUT:10
//val1 = null ?? 10 ?? 10//OUTPUT:10

console.log(val1);

//Ternary Operator

//Condition?true : false


// const iceTeaPrice = 100

// iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


//OUTPUT:more than 80












