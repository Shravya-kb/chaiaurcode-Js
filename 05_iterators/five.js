//FOREACH LOOP

/*const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function(val){
    console.log(val);
})

OUTPUT:
js
ruby
java
python
cpp
*/
/*const coding =["js","ruby","java","python","cpp"]

coding.forEach((item)=>{
    console.log(item);
})
OUTPUT:
s
ruby
java
python
cpp
*/
/*
const coding =["js","ruby","java","python","cpp"]

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

//OUTPUT:
js
ruby
java
python
cpp
*/
/*
const coding = ["js","ruby","java","python","cpp"]

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})
//OUTPUT:
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
/*
const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"javascript"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
//OUTPUT:
javascript
python
*/