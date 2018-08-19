// You cannot use negative numbers in javascript.
var string = "Johnathan is not a baby!"
console.log(string.length)
console.log(string.toUpperCase())
//Slicing
console.log(string.slice(6,12))
//Slice can take one (start) or two variable (start,end)
//A slice can take a negative number, but not in square bracket notation.
console.log(string.slice(10,-5))
//negative seems to count in from the end of string.
//We can store as number as a variable and to use this in a slice.
//Changing name to upper case does not change the variable name, neither did slicing.
//Strings are called immutables
//If we want to change string we would need to reassign it.  Otherwise it will not change.
//How to tell the computer which version of a variable we want to use.
var var1 = 5
var var2 = "2"
console.log(var1)
console.log(String(var1))
console.log(var2)
console.log(var1 * parseInt(var2))
// MDN documentation is a JOY to read according to Ilona
// parseInt() and String()
//if you parseInt a float it rounds down to the whole number, so it appears
//that it has just cut then end off.  A better idea is to round.
//Be careful with string types as Javascript is dynamic.

//Always a good idea to santitise user input to make sure that the user
//has answered in the correct format.
console.log(20)
console.log(String(20))
console.log(parseInt(String(20)+"04"))
// You can convert it to a string, join and then convert back into a number.
// In Ruby print() is puts() where s is for string.
//What happens when you try to console.log() an inappropriate object?
// It will convert it into a string.
firstName = prompt("What's your first name?")
middleName = prompt("What is your middle name?")
surName = prompt("What is your surname?")
console.log("Hello",firstName,middleName,surName)
a = parseInt((Math.random()*10)+1)
// above is random number generator for numbers from 1 to 10.  
// Math.random() is the only function
// Try to generate your own CIV3 words.




