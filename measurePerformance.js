

function slow(){
    const arr = [];

    for (let i = 0; i < 1000000; i++){
        arr.push(i * i);
    }
}
slow();
