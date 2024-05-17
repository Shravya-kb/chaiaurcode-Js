//for of
//["","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5];

// for(const num of arr){
//     console.log(num);
// }

/*OUTPUT:
1
2
3
4
5
*/

// const greetings = "Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }
/*
OUTPUT:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/ 
//NOTE IMPORTANT: IN  JAVASCRIPT EVERYTHING IS OBJECT.

//MAP IS ALSO A OBJECT IN JAVASCRIPT
//map has a key value pairs in it and it has unique values stored in it.
//map remembers the order in which the items are inserted.
/*
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")


console.log(map)
//OUTPUT:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/
/*
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for(const key of map){
    console.log(key);
}
*/
/*
OUTPUT:
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/ 
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for(const [key,value]of map){
//     console.log(key,':-',value);
// }
//OUTPUT:
/*
IN :- India
USA :- United States of America
Fr :- France
*/ 
//NOTE: MAPS ARE ITERABLE 

/*
REMINDER: OBJECTS ARE NOT ITERABLE
*/
/*
const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
for(const [key, value] of myObject){
    console.log(key, ':-',value)
}
*/

//OUTPUT:
//Error:myObject is not iterable.OBJECTS ARE NOT ITERABLE IN FOROF LOOP

// */ 
