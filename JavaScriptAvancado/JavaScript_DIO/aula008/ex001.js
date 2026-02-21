let nota1 = 9, nota2 = 8, nota3 = 10

let media = (nota1+nota2+nota3)/3

if(media < 5){
    console.log("Reprovado");
} else if(media >= 5 && media < 7){
    console.log("Recuperação");
} else{
    console.log("Aprovado");
}