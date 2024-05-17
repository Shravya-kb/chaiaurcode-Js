//FORIN LOOP



//FORIN LOOP IN OBJECTS:
// const myObject = {
//     js: 'javascript',
//     cpp:'C++',
//     rb:"rubby",
//     swift:"swift by apple"
// }

// for(const key in myObject){
//     console.log(myObject);
// }
/*
OUTPUT:
{ js: 'javascript', cpp: 'C++', rb: 'rubby', swift: 'swift by apple' }
{ js: 'javascript', cpp: 'C++', rb: 'rubby', swift: 'swift by apple' }
{ js: 'javascript', cpp: 'C++', rb: 'rubby', swift: 'swift by apple' }
{ js: 'javascript', cpp: 'C++', rb: 'rubby', swift: 'swift by apple' }
*/ 


// const myObject = {
//          js: 'javascript',
//          cpp:'C++',
//          rb:"rubby",
//          swift:"swift by apple"
//      }
// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
/*
OUTPUT:
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for rubby
swift shortcut is for swift by apple
*/ 

//FORIN LOOP IN ARRAYS:
/*
const programming = ["js","rb","py","java","cpp"]
 
for(const key in programming){
    console.log(key);
}
OUTPUT:
0
1
2
3
4
NOTE: WHEN WE USE FORIN LOOP IN ARRAYS WE GET KEYS INSTEAD OF VALUES THAT IS THE BUG.
*/
/*
const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}

OUTPUT:

js
rb
py
java
cpp

*/

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('Fr',"India")

for(const key in Map){
    console.log(key);
}