let maiorPar = 0, menorImpar = 999999999;

let numAleatorio

for(let i = 0; i <= 10; i++){
    numAleatorio = Math.floor(Math.random()*100);
    
    if(numAleatorio % 2 === 0 && numAleatorio > maiorPar){
        maiorPar = numAleatorio
    } else if(numAleatorio % 2 != 0 && numAleatorio < menorImpar){
        menorImpar = numAleatorio
    }
}

console.log(`Maior número par: ${maiorPar} e Menor número Ímpar: ${menorImpar}`);

