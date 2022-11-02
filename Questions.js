/* 

Question 1: (a) Create the polyfill for the filter and then (b) use that filter method to remove the duplicate from the given string. 

Array.prototype.myFilter = // your own implemenation of the filter method
removeDuplicate('Manisha Basra JS coder');

*/




// polyfill code for filter array method
function myFilter (fn) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      const res = fn(this[i], i, this);
      if (res) {
        arr.push(this[i])
      }
    }
    return arr;
  }

// remove duplicate using call and above myFilter method
function removeDuplicate(string) {
  const strArray = string.split('');
  let result = myFilter.call(strArray, (item, index, arr) => {
    return item === ' ' || arr.indexOf(item) == index;
  }).join('');
  return result;  //Manish Br JS code
}

console.log(removeDuplicate('Manisha Basra JS coder'));


/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */


/*
Question 2: Complete the implementation of the logger function.


const logger = fn => {
  // .... ?
}

const add = (a, b) => a + b;
const reverseStr = str => str.split("").reverse().join('')

const res1 = logger(add)(1, 2)
// args are: 1, 2
// result is: 3

const res2 = logger(reverseStr)('jscodelover')
// args are: jscodelover
// result is: revoledocsj

*/

const logger = fn => {
  return (...args) => {
    const result = fn(...args);
    console.log(`args are: ${args}`)
    console.log(`result is: ${result}`)
  }
}



/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */


// what is the output of the following code and why?

for(var i=0; i<5; i++){
  setTimeout(print(i),(i+1)*3000);

  function print(index){
    debugger;
    console.log(index)
  }
}

/*
    0
    1
    2
    3
    4
    
    Instead of passing the function definition inside the setTimeout method we are calling the function; so the print() function is called immediately 
    without waiting for the setTimeout to get completed
*/




