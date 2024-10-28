const {exec, spawn} = require('child_process');

// Exec
/* const childProcess = exec('dir', (err, stdout, stderr) => {
    if(err){
        console.log(err.message);
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

childProcess.on('exit', (code) => {
    console.log(`Code: ${code}`);
}); */


// Spawn
const childProcess = spawn('ls');

childProcess.stdout.on('data', (data) => {
    console.log(`Stdout: ${data}`);
}); 

childProcess.stderr.on('data', (data) => {
    console.log(`Stderr: ${data}`);
}); 

childProcess.on("exit", (code) => {
    console.log(`Code: ${code}`);
}); 