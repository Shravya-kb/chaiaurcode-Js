


console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }



const chai = () =>{
    let username = "hitesh"
    console.log(this.username);
}

chai()


const addTwo=(num1, num2)=>{
    return num1 + num2;
}
console.log(addTwo(3,4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

