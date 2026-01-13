var idade = 15;

if(idade < 18){
    console.log(`Não pode votar`);
} else if(idade >= 16 || idade >= 65){
    console.log(`Voto opcional`);
} else{
    console.log(`Maior de idade, deve votar`);
}