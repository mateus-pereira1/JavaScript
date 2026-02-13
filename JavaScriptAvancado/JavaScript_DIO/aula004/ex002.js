function maioridade(idade){
    if(idade >= 18){
        return "Maior de Idade"
    } else{
        return "Menor de Idade"
    }
}

let minhaIdade = maioridade(19);
console.log(minhaIdade);