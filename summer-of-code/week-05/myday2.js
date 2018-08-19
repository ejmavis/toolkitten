console.log("Welcome to Day 2!")
console.log("Hello to Johnathan!  I hope you like your strawberries.")
console.log("Javascript rocks! Have an empty string!")
console.log("")
console.log("Did you enjoy your empty string?\nLet's see what this does?")
// If you leave a space after \n it will add a space so lines will not align
console.log("        ")
// The above can be useful as sometimes we want to show that we had a zero result
console.log("You can highlight a string made of spaces.\nYou can't highlight the empty string.")
console.log("Snoppy says #%^?&*! when he stubs his toe.")
//String Arithmetic
console.log("Louis + Rupert")
//The above prints what is in the string, the plus sign is not used as an operator
console.log("Louis "+"and Rupert")
//The above concatenates the strings, will need empty spaces to create spaces as they are placed next to each other.
console.log("Louis","and Rupert")
//If we use a comma, space is added automatically.
//console.log("Rupert"*4) This gives us NaN - not a number
//Does not work with *4 at front or back.
console.log("33333" - 3)
// You can subtract a number from a string if the string can be translated into a number.
// The minus sign asks for the under the hood conversion to occur.
// This is called a type conversion.
console.log("12" , 12)
//The above appears in different colours in the console.
console.log("adding two numbers")
console.log("12" + 12)
// If both are strings, no type conversion takes place.
console.log("12" + "12")
console.log("2" * 5)
// Does a type conversion
console.log("2"*"5")
//If we put the whole expression into quotes, it does not use a type conversion.
console.log("2*5")
console.log("You can say that again....")
console.log("You can say that again....")
var comment = "You can say that again...."
console.log("Using a variable")
console.log(comment,comment,comment)
var name1 = "Rupert"
var name2 = "Louis"
console.log(name1,"and",name2)
//Do not need to put quotes around variable names.
console.log(name1,name2,name1 + name2, name1*name2)
