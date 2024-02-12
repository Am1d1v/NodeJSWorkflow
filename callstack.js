

const a = 10;

function dobule(a){ 
    return a * a;
}

function logDouble(a){
    console.log(dobule(a));
}

console.log(`Old value: ${a}`);
logDouble(a);