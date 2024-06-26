//array
//JavaScript Arrays are resizable. we can add any number of elements later 
//even after initializing it once.
//Array elements can be mix of any datatypes. it can be numbers, string ,boolean, integers,
//objects or array inside array.
const myArr = [0, 1, 2, 3, 4, 5];

console.log(myArr[0]);//used to access elements in the array.

/*!!!!!!-----------IMPORTANT INTERVIEW QUESTION--------------------------!!!!!!!!!!!!!!!!!!!
Q.What type of copies does JavaScript get while we make copy of the array?
ANSWER: JavaScript array-copy operations create shallow copies. 

SHALLOW COPY => A shallow copy of an object is a copy whose properties share
 the same reference(point to the same underlying values) as those of the sourrce object 
 from which the copy was made.As a result, when you change either the source or the copy,
 you may also cause the other object to change too- and so, you may  endup unintentionally 
 causing changes to the source or copy  that you don't expect.
 That behavior contrasts with the behavior of a deep copy, in which the source and copy are
  completely independent.
*/
  const myHeros =["shaktiman","naagraj"];

  const myArr2 = new Array(1, 2, 3, 4);
  console.log(myArr[1]);
  
  //Array methods

  myArr.push(6)
  myArr.push(7)
  myArr.pop()
  console.log(myArr);




myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);


const newArr = myArr.join();

console.log(myArr);// OUTPUT: [ 0, 1, 2, 3, 4, 5, 6]
console.log(newArr);// OUTPUT: 0,1,2,3,4,5,6
console.log(typeof newArr);//OUTPUT: string

const myn1=myArr.slice(1,3);//string

console.log(myn1);// [ 1, 2 ]//both the ranges are not included.ONly 1st range is included & 2nd range is 
//included.
console.log("B ",myArr);//B  [0, 1, 2, 3, 4, 5, 6] //NOTE:spice() method doesnot manipulate the original array.

const myn2 = myArr.splice(1,3);
console.log(myn2);//[ 1, 2, 3 ] //both the ranges are included
console.log("C ", myArr);// C [ 0, 4, 5, 6 ] //NOTE:splice() method manipulate the original array.
//and both the ranges are included.






