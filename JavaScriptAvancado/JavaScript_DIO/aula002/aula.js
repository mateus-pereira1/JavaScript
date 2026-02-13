//Tipo binário: São valores que retornam true ou false

const numero = 0;

const numeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log("Número inválido")
}else if(numeroPar){
    console.log("Par!")
} else{
    console.log("Impar!")
}