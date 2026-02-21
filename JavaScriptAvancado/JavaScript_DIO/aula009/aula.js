//JS é fracamente tipado, pois não necessita passar o tipo da varíavel durante a declaração
var var1 = 10;
var var2 = "teste";

//hoisting: Ele levanta as funções e variáveis para o inicio do arquivo, podendo chamar funções de qualquer ponto do código

function teste(){
    console.log('teste');
}

teste();

/*Var, Let e Const:

Var - Ele vaza escopos por conta do hoinst, sendo assim uma variável global que é acessada de qualquer local do arquivo.

Let - Ela não vaza escopos, sendo necessário utilizar ela apenas dentro do escopo ao qual foi declarada.

Const - Funciona como uma Let, porém, ela tem valor constante, sem poder alterar a mesma.
*/