

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


// const timerID =  setTimeout(() => {
//     console.log('Info')
// }, 5000);

// setTimeout(() => {
//     clearTimeout(timerID);
//     console.log('Cleared');
// }, 1500);


// const intervalID = setInterval(() => {
//     console.log(performance.now());
// }, 3000);


// setTimeout(() => {
//     clearInterval(intervalID);
// }, 10000);

// console.log('Before');
// setImmediate(() => {
//     console.log('After All')
// });
// console.log('After');


// Ref & Unref
const timerID = setTimeout(() => {
    console.log('Timer Info')
}, 3000);
timerID.unref();

setImmediate(() => {
    timerID.ref();
})









