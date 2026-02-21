class Carro{
    marca;
    cor;
    consumo;

    calculaViagem(precoGasolina, distancia){
        let valorViagem = (distancia / this.consumo) * precoGasolina;
        return valorViagem;
    }
}

let golf = new Carro();

golf.marca = 'VW';
golf.cor = 'preto';
golf.consumo = 10;

let custoViagem = golf.calculaViagem(5.78, 100);

console.log(golf);
console.log(`O custo da viagen é de: R$${custoViagem.toFixed(2)}`);