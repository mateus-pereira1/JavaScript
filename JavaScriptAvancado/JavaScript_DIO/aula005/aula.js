/*

Dinâmico: É possivel adicionar ou modificar propriedades de um objeto a qualquer momento.

Objetos em JS é uma coleção dinâmica de chave e valor

*/

class Pessoa{
    //Atributos
    nome;
    idade;

    seApresentar(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }  
};

//vitor.altura = 1.80;

//delete vitor.nome;

const vitor = new Pessoa();

vitor.nome = "Vitor";
vitor.idade = 27;

const renan = new Pessoa();

renan.nome = "Renan";
renan.idade = 30;

console.log(vitor);
console.log(renan);

//Classe é um objeto e instância é a ação daquele objeto.


