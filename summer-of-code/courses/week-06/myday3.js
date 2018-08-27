function foo(b){
	var a = 10
	// a is a private variable
  return a + b + 11
}

function bar(x){
	var y = 3
	return foo(x * y)
}

console.log(bar(17)) //
console.log('My next')
 
// Set time out exercise

const s = new Date().getSeconds()
// make sure that you take care with (), otherwise it won't run properly.

setTimeout(function() {
	//anonymous function
	// gets into queue first and runtime goes on to the next message in the queue
	console.log('Ran after ' + (new Date().getSeconds() - s + ' seconds'))
}, 500)

while(true) {
	// Runtime moves on to this part of code and executes it, then goes back to setTimeout() which is processed after this code.  
	// Set timeout is an indication of minium time, you cannot use it for very specific or exact timings.
	if (new Date().getSeconds() - s >= 2) {
		console.log('Good, 2 seconds have passed, we were happily looping')
		break
	}
}

// Second example

// IIFE - Immediately Invoked Function Expression

(function() {
	console.log('Rupert: This is the start. ')
	// function cb() callback function
	setTimeout(function cb() {
		console.log('Louis: This is a message from the 0th Callback.')	
	})
	console.log('Toby: This is just a incoming  <3')

	setTimeout(function cd1(){
		console.log('Sophie: Bless you! I\'m sending you this message from callback 1')
	})

	console.log('This is the end.')
})()

// Good, 2 seconds have passed, we were happily looping
// Rupert: This is the start. 
// Toby: This is just a incoming  <3
// This is the end.
// Ran after 2 seconds
// Louis: This is a message from the 0th Callback.
// Sophie: Bless you! I'm sending you this message from callback 1
// The callouts would be expected to be the other way round - as Stack is FILO - Ilona thinks each one had its own queue so this is why they appeared

// I frame - frame from a different server, so have different runtimes
// These can communicate via a post message.
// This runtime is not blocking of input/outputs.

// Homework
// Choose any of the exercises from the advanced JS courseware to complete.  There are quite a few to choose from. Game of Life?
// Choose your own mini project and to submit.
// Keep in mind that a one weeks submission should be about 400 lines (might go to 500)
// Study by Smartbear on CISCO systems - review is optimised on 200-400 lines of code ~ about an hours time to review.
// Comments should be limited to your decision not what the code is doing.  What the code is doing should be easy to understand from the code itself.

// 3 ways to specify a variable
// let
// var
// const - cannot be reassigned.

// Javascript didn't have BLOCK scope
// reference is constant, object can change, but cannot reassign the object.  The object is mutable.
// var can be reassigned anyway.
// var variables are hoisted to the top.


var x = 10
console.log('x is equal to ' + x)
{
	const x = 2
	console.log('x is equal to ' + x)
}
console.log('x is now ' + x)

{
	let x = 3
	console.log('I am x in block scope: ' + x)
}
console.log('I am x in global scope: ' + x)