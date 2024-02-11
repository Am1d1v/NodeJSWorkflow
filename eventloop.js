const fs = require('fs');


console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 0')
}, 10);

setImmediate(() => {
    console.log('Immediate');
});

fs.readFile(__filename, () => {
    console.log('File readed');
});

setTimeout(() => {
    for(let i = 0; i < 1000000000; i++){
        
    }
    console.log('Big Operation Done')
}, 100);

Promise.resolve().then(() => {
    console.log('Promise')
})

console.log('Final');