let lista = [];
let numPar = [];


for(let i = 0; i <= 20; i ++){
    let numAleatorio = Math.floor(Math.random()*100);
    lista.push(numAleatorio.toFixed(2)*1);
    console.log(lista[i]);
}

for(let i = 0; i < lista.length; i++){
    if(lista[i] % 2 == 0){
        numPar.push(lista[i]);
    }
}

console.log(`Lista com números pares: ${numPar}`);