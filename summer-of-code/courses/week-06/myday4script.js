'use strict'
// to be safe - best practice

var promiseCount = 0

function testPromise() {
    let thisPromiseCount = ++ promiseCount

    let log = document.getElementById('log')
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Started(<small> Sync Code Started</small>)<br/>')

    let p1 = new Promise((resolve, reject) => {
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise Started(<small>Async code started</small><br/>')
        window.setTimeout(function(){
            resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000)
    })

    p1.then(
        function(val){
            log.insertAdjacentHTML('beforeend', val + ') Promise Fullfilled (<small> Async Code Terminated</small>)<br/>')
    }).catch((reason) => {
        console.log('Handle Rejected Promise(' +reason+ ') here.')
    })

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise made(<small>Sync Code terminated</small><br/>')
} if ('Promise' in window) {
     let btn = document.getElementById('btn')
     btn.addEventListener('click', testPromise)
} else {
    log = document.getElementById('log')
    log.innerHTML = 'Cannot run the live example because your browser cannot handle the Promise interface'
}
