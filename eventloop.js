

console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 0')
}, 10);

setImmediate(() => {
    console.log('Immediate');
});

console.log('Final');