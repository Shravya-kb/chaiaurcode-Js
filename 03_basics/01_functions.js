function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName();

function addTwonumbers(number1,number2){//Parameters
    console.log(number1+number2);
}

// addTwonumbers(3,4);OUTPUT:7
addTwonumbers(3,"4");//OUTPUT:34
addTwonumbers(3,"a");//OUTPUT:3a
addTwonumbers(3,null);//Arguments//OUTPUT:3

function addTwonumbers1(number1,number2){
    console.log("Shravya");
    // let Result = number1+number2;
    // return Result;//OUTPUT:Result:  8
    return number1+number2;//OUTPUT:Result:  8
}

const result = addTwonumbers1(3,5);

console.log("Result: ",result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return;
    }
    return`${username} just logged in`;
}

/*OR
WE CAN ALSO CHECK USERNAME IS UNDEFINED OR NOT USING THE BELOW CODE:
function loginUserMessage(username){
if(!username){
    console.log("Please enter the user name");
    return;
}
return`${username} just logged in`;
 }
 */

 /*IF WE DO NOT WANT THE UNDEFINED VALUE THEN WE CAN USE DEFAULT VALUE TO THE FUBCTION PARAMETER AS BELOW:
 function loginUsername(username ="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`;
 } */

console.log(loginUserMessage("Shravya")); //OUTPUT:Shravya just logged in
console.log(loginUserMessage(""));//OUTPUT:  just logged in
console.log(loginUserMessage());//OUTPUT:undefined just logged in

function calculateCartPrice(...num1){//(...num1) is rest operator
    return num1;
}

console.log(calculateCartPrice(200,400,500));

function calculateCartPrice1(val1,val2,...num1){//(...num1) is rest operator
    return num1;
}
  
console.log(calculateCartPrice1(200,400,500));

const user ={
    username: "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));//OUTPUT:100

console.log(returnSecondValue([200,400,500, 1000]));

