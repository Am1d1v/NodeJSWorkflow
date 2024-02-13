


function slow(){
    // Start performance mark
    performance.mark('start');

    const arr = [];
   
    for (let i = 0; i < 1000000; i++){
        arr.push(i * i);
    }
    
    // End performance mark
    performance.mark('end');

    // Performance measure calculation
    performance.measure('slow', 'start', 'end');
    
    console.log(performance.getEntriesByName('slow'));
}
slow();

