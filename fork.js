const {fork} = require('child_process');

const forkProcess = fork('forkapp.js');

forkProcess.on('message', (msg) => {
    console.log(`Message: ${msg}`);
});

forkProcess.on('close', (code) => {
    console.log(`Exited: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');