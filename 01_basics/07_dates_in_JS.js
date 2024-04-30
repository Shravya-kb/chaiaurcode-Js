// Dates

let myDate = new Date();//date obejct is created
console.log(myDate.toString()); //OUTPUT: Mon Apr 29 2024 23:36:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //OUTPUT: Mon Apr 29 2024
console.log(myDate.toLocaleString());//Converts to different format as requried using the method
//OUTPUT:
//4/29/2024, 11:36:52 PM

//So here different methods to Date represents date in different format needed by us. 
//so as per our requirement in whichever format we want we can display dates using any of the methods 
//as per our needs.

console.log(typeof myDate); //OUTPUT: object
//Date in JavaScript is always an Object. *****IMPORTANT NOTE THIS IS AN INTERVIEW QUESTION:
//WHAT IS THE DATATYPE OR TYPE OF DATE IN JAVASCRIPT?
//Answer: Type or Data Type of ' DATE ' in JAVASCRIPT is OBJECT.

let myCreatedDate = new Date(2023, 0, 23);//Month starts from 0 in Javscript. so '0' means Month JANUARY.
//To create a specified date of our own we use the above line.
console.log(myCreatedDate.toDateString());//OUTPUT: Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);//Here 5 and 3 Represents the Time 5 is hour and 3 is minutes.
console.log(myCreatedDate1.toLocaleString()); // 1/23/2023, 5:03:00 AM


let myCreatedDate2 = new Date("2023-01-14");//Here we use this when we want date in yyyy-mm-dd format
//NOTE: When we give date in dd-mm-yy format the month does not Start from 0, it starts from 01 =>JANUARY
console.log(myCreatedDate2.toLocaleString());//OUTPUT: 1/14/2023, 12:00:00 AM

//NOTE: IN INDIA WE DONT USE yy-mm-dd format . We use mm-dd-yyyy format. so below is the code for mm-dd-yyyy format:
let myCreatedDate3 = new Date("01-14-2023");//mm-dd-yyyy format
console.log(myCreatedDate3.toLocaleString());//OUTPUT: 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
//TimeStamp is used when oranizing quizes or poles to see who have submited first based on the timing
console.log(myTimeStamp);//gives the exact time in miliseconds

console.log(myCreatedDate3.getTime());//this gives the exact time on that particular date .
// it can be used in comparing time in ARBnb website CLONE IN ROOM BOOKING Feature.

console.log(Math.floor(Date.now()/1000))//To convert into seconds we divide by 1000.
// we use floor to remove the decimals.

/* IMPORTANT NOTE:
*************** INTERVIEW QUESTION: ***********************************************************************

How to Convert the time from miliseconds to seconds?
Answer by dividing time by 1000 and then to remove decimal use floor.
Code: console.log(Math.floor(Date.now()/1000)) //this code gives current time in seconds removing the 
decimal values.

*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// We are writing here +1 because 
//as we know from earlier that JavScript shows 0 as Month 1 that is January. 
//i.e: IN JAVASCRIPT MONTH STARTS FROM 0 NOT 1 BUT TO GIVE THE MONTH IN THE FORMAT OF 1=> JANUARY
//Since user prefer or expect the months from 1 not 0 so we added +1 to give the exact month as per 
//user needed format.

console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleString().split(" ")[1]} Date: ${newDate.toDateString()}`);

console.log(`The Day is ${newDate.getDay()}nd and the time is ${newDate.toTimeString().split(" ")[0]} Date: ${newDate.toDateString()}`);



console.log(newDate.getDay());



console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Asia/Kolkata"
    
}));

let currentDate = new Date();
console.log(currentDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
}));