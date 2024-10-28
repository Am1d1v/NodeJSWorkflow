

const perfHooks = require('perf_hooks');

test = perfHooks.performance.timerify(test);

const performanceObserver = new perfHooks.PerformanceObserver((items, observer) => {
    console.log(items.getEntries());

    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name} ${entry.duration}`);

    // Disconnect observer
    observer.disconnect();
});

performanceObserver.observe({entryTypes: ['measure', 'function']});

function test(){

    const arr = [];

    for (let i = 0; i < 1000000; i++){
        arr.push(i * i);
    }

}

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

    
}

slow();
test();

