// Flow control
// IF and ELSE statements
// Javascript allows this to happen in the browser.
// a==b compares a and b
// a===b compares type as well
// a!==b not equal to b
// && and
// || or
// ! not
// ? if
// a = 15
// var longName = (a > 10) ? "You have a long name" : "You have a short name";
// console.log(longName)
// age = 30
// var canVote = (age < 18) ? "You are too young to vote" : "You can vote";
// console.log(canVote)
// age = 13
// var canVote = (age < 18) ? "You are too young to vote" : "You can vote";
// console.log(canVote)
var a = 'Rupert Bear'.length
var b = 'King Louis'.length
if (a > b) {
  console.log('A is longer than B.', a, b)
} else if (a === 20) {
  console.log('The length is 20.')
} else if (a === 21) {
  console.log('The length is 21.')
} else {
  console.log('a isn\'t bigger than b', a, b)
}
// Look at typeof() function
// isArray()

// var input = ''
// while (input !== 'bye') {
//   input = prompt()
// }
// alert('Come again soon!')

// while loop
var i = 0
//while
while(i < 1000){
    // I changed it from 1,000,000 as it was taking too long to reach in the console
    console.log('More, more more');
    i++
}
console.log('We got there!!!!!!!!!!!')