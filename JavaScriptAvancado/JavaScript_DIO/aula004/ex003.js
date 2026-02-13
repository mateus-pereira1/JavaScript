function myName(name){
    return "Meu nome é "+name;
}

myName("Mateus");

function maioridade(idade){
    if(idade >= 18){
        return myName("Mateus")+" e sou Maior de Idade";
    } else{
        return myName("Mateus")+" e sou Menor de Idade";
    }
}

console.log(maioridade(10))


