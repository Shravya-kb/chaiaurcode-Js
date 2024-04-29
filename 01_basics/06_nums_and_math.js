const score  = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);//toString changes the number which is stored in the balance variable into string
console.log(balance.toFixed(2));//toFixed method is used to make changes in the precession value.here since
//here since we gave 2 the value will 2 after particular nuber say 100.00 (.00 is the precison here thecount we gave 2 if we had given 3 it would come .000 example 100.000)
//used to fix the digits that comes after decimal.


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//use this toPrecision() menthod when you exactly know what will be the digits before decimal because otherwise it will show error.
console.log(otherNumber.toPrecision(4));

const hundreds =1000000;
console.log(hundreds.toLocaleString('en-IN'));// toLocaleString() method is used to convert the into currency denotion as perr the countries mentioned inside the (braces).
// here inside the braces it is mentioned ('en-IN') so it will convert the normal numbers
//which is in US english currency format that is in Dollar currency representation format to 
//indian currrency representation format.

//so the OUTPUT FOR THE ABOVE LINE IS : 10,00,000

//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//gives absolute value here the output will be +ve that is : 4
console.log(Math.round(4.6));//It rounds off something which is after decimal to whole number
// if it is 5 or greater than 5 written after decimal. Here the OUTPUT is : 5

console.log(Math.ceil(4.2));//It chooses top value if something comes after decimal 
//so here if 4. something value comes then it will make it to the top value 5 OUTPUT HERE IS: 5

console.log(Math.floor(4.2)); //It chooses lower value if something comes after decimal
//so here if 4. something value comes then it will make it to lower value 4 OUTPUT HERE IS: 4
console.log(Math.floor(4.9)); //OUTPUT HERE IS ALSO : 4 SINCE it Takes LOWER VALUE.

console.log(Math.min(4, 3, 6, 8));//OUTPUT:3
console.log(Math.max(4, 3, 6, 8));//OUTPUT:8

console.log(Math.random());//Everytime Math.random() Methods OUTPUT will be the random values between 0-1.
console.log((Math.random()*10) + 1);  // Here when we do *10 it will shift values the decimal value. 
//And we are adding 1 here because we want to print numbers from 1 to any number but it should not be 0.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// here we are doing max - min instead of 10
// because it gives the exact range like it defines the range of digits it wants in this example the answer 
//answer will be max-min =>20-10=10. But as the values of min and max changes it changes according so
//so  we write max-min instead of 10 or writing any fixed value like 100 etc.
//Here we used +1 for the random values to be non zero that is the value must be 1 or more never 0.
// at last we added +min here because the value should be minimum from minimun value it 
//it should never be less than that.






