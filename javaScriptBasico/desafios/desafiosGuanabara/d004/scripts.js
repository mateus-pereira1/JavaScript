let calcula = window.document.querySelector('button.calcula');

calcula.addEventListener('click', function(){
    let produto = window.prompt('Que produto está comprando?');

    let txtPreco = window.prompt(`Quanto custa o ${produto} que você está comprando ?`);

    let txtValorCliente = window.prompt(`Qual foi o valor que você deu para pagar ${produto}`);

    let preco = Number(txtPreco);
    let valorCliente = Number(txtValorCliente);

    let troco = valorCliente - preco

    window.alert(`Você comprou ${produto} que custou R$${preco}.Deu R$${valorCliente} em dinheiro e vai receber R$${troco}. Volte Sempre!`);

    
});