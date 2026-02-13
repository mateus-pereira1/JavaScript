let media;
let nota1 = 3;
let nota2 = 2;
let nota3 = 5;

media = (nota1+nota2+nota3)/3;

if(media < 5){
    console.log("Média:"+media.toFixed(2)+". Nota menor que 5, reprovação");
} else if(media >= 5 && media < 7){
    console.log("Média:"+media.toFixed(2)+". Nota entre 5 e 7, recuperação");
} else{
    console.log("Média:"+media.toFixed(2)+". Nota maior que 7, passou de semestre");
}

