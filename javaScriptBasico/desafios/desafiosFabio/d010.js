function myFunction(a,b){
    let array = []
    for(let i = a; i <= b; i++){
        array.push(i);
    }

    return array;
}

console.log(myFunction(1,5));

console.log(myFunction(11,18));

console.log(myFunction(-5,5));
