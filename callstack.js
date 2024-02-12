

// const a = 10;

// function dobule(a){ 
//     return a * a;
// }

// function logDouble(a){
//     console.log(dobule(a));
// }

// console.log(`Old value: ${a}`);
// logDouble(a);



// const a = 10;

// setTimeout(() => {
//     console.log('Timeout')
// }, 1000);
// console.log(`Old value: ${a}`);



const a = 10;

function firstFn(){
    return secondFn();
}

function secondFn(){
    return thirdFn();
}

function thirdFn(){
    console.log(a);
}

setTimeout(() => {
    console.log('Timeout')
}, 1000);

firstFn();