let combustivel = "teste";
let precoCombustivel
const kmPorLitro = 10;
const distancia = 100;
let consumo

if(combustivel === "gasolina"){
    precoCombustivel = 5.79;
    consumo = precoCombustivel * (distancia/kmPorLitro);
    console.log(consumo)
} else if(combustivel === "etanol"){
    precoCombustivel = 4.5;
    consumo = precoCombustivel * (distancia/kmPorLitro);
    console.log(consumo)
} else{
    console.log("Digite um combustível válido!");
}


