let imc;
let peso = 80;
let altura = 1.8;

imc = peso/(altura*altura);

if(imc < 18.5){
    console.log("IMC: "+imc+" - Abaixo do peso");
} else if(imc >= 18.5 && imc < 25){
    console.log("IMC: "+imc+" - Peso normal");
} else if(imc >= 25 && imc < 30){
    console.log("IMC: "+imc+" - Acima do peso");
} else if(imc >= 30 && imc <= 40){
    console.log("IMC: "+imc+" - Obesidade");
} else{
    console.log("IMC: "+imc+" - Obesidade severa");
}