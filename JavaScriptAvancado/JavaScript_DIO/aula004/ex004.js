function calculaDesconto(formaPagamento, preco, numVezes){
    if(formaPagamento === 1){
        let valorPagamento = preco - (preco*0.1);
        return "A vista desconto de 10%, valor de pagamento: R$"+valorPagamento;
    } else if(formaPagamento === 2){
        let valorPagamento = preco - (preco*0.15);
        return "Via Pix desconto de 15%, valor de pagamento: R$"+valorPagamento;
    } else if(formaPagamento === 3 && numVezes <= 2){
        let valorPagamento = preco
        return "Preço de etiqueta, valor de pagamento: R$"+valorPagamento;
    } else if(formaPagamento === 4 && numVezes > 2){
        let valorPagamento = preco + (preco*0.10);
        return "Acima de 2x, valor de pagamento: R$"+valorPagamento;
    } 
}

const desconto = calculaDesconto(4,100, 5);

console.log(desconto);