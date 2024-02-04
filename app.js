

// NodeJS Workflow

// Timers

// const start = performance.now();
// setTimeout(() => {
//     console.log(performance.now() - start);
//     console.log('One Second')
// }, 1000);

// function myFn(arg){
//     console.log(arg);
// }

// setTimeout(myFn, 1000, 'Data');


const timerID =  setTimeout(() => {
    console.log('Info')
}, 5000);

setTimeout(() => {
    clearTimeout(timerID);
    console.log('Cleared');
}, 1500);
