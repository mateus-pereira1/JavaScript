function myFunction(a,b){
    let count = 0;
    for(let i = 0; i <= b.length; i++){
        if(b[i] === a){
            count++
        }
    }

    return count;
}


console.log(myFunction('a',"Quantas vezes o valor 'a' ocorre aqui?"));

