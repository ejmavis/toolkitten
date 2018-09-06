var promise1 = new Promise(function(resolve, reject){
    // success value, failure reason
    setTimeout(resolve, 100, 'Good morning ladies')
})

console.log(promise1)

var promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Success')
    },250)
})

promise2.then((successMessage) => {
    console.log('Yay! ' + successMessage)
})

promise1.then((successMessage) =>{
    console.log('Yay! ' + successMessage)
})
promise1.catch((reject) => {
    console.log("Oh no!!!")
})

// HW Add syntax to return promise1

// A promise has three states, pending, fulfilled or rejected.
// This did not exist before ECMAScript 6 (2015)

// There is a Promise.protype.then() SUCCESS
//and a Promise.protype.catch() function REJECTED
// The two states of fullfilled or rejected the promise is 
// SETTLED.

// Methods for Promises

// if it is settled can call Promise.prototype.finally(onFinally)
// Promise.all(iterable) - Iterable could be an array or object with iterable properties
// Promise.race(iterable) - Catches the first, one that wins the race
// Promise.reject(reason) - returns promise object that has been rejected with a reason
// Promise.resolve(value) 

function myAsynFunction(url) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.onload = () => resolve(xhr.ResponseTest)
        xhr.onerror = () => reject(xhr.statusText)
        xhr.send()
    })
}

