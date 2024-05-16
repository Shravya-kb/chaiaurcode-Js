//if
const isUserloggedIn = true
const temperature = 41

if(temperature <50){
    console.log("less than 50");
} else{
    console.log("temperature is greater than 50")
}
console.log("execute");
if(3!=2){
 console.log("true");
}

if(2=='2'){
 console.log("executed");
}

// if(2)

    const score =200;

    if(score>100){
        let power = "fly"
        console.log(`User power: ${power}`);//OUTPUT:User power: fly

    }
    //console.log(`User power: ${power}`); Error: power is not defined

    if(balance<500){
        console.log("less than 500");
    }else if(balance<750){
        console.log("less than 750");
    }else if(balance<1000){
        console.log("less than 1000");
    }else{;
        console.log("greater")
    }

    const UserloggedIn = true;
    const debitCard = true;
    const loggedinFromGoogle= false;
    const loggedinFromEmail =true;

    if(userLoggedIn &&  debitCard && 2==3){
        console.log("Allow to buy courses");
    }

    if(loggedinFromGoogle || loggedinFromEmail){
        console.log("User logged in");
    }