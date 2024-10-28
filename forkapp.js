


process.on('message', (msg) => {
    if(msg === 'disconnect'){
        process.disconnect();
        return;
    }
    console.log(`Client message: ${msg}`);
    process.send('Pong');
    
});