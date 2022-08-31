/* Question : (a) Create the polyfill for the filter and then (b) use that filter method to remove the duplicate from the given string. */

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
function removeDuplicateCharacters(string) {
  const strArray = string.split('');
  let result = myFilter.call(strArray, (item, index, arr) => {
    return item === ' ' || arr.indexOf(item) == index;
  }).join('');
  return result;  //Manish Br JS code
}

console.log(removeDuplicateCharacters('Manisha Basra JS coder'));


/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */
