//Immediately invoked function Exoressions(IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})();
//why do you use Immediately invoked function Exoressions(IIFE) in JavaScript?
/*This function executes immediately.
there will be pollution in global scope sometimes . 
so to avoid the pollution of variables in the global scope, we are using IIFE principle*/


( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('hitesh');

(function chai1(){
    console.log(`DB CONNECTED`);
})();
//Note:to write 2 IIFE's together in a code then we need to use ; in all the previous function executions.

