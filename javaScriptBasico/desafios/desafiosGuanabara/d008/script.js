function desconto(){

    let txtProduto = window.prompt('Qual é o produto que você está comprando?');

    let txtPreco = window.prompt(`Qual é o preço de ${txtProduto}`);

    let preco = Number(txtPreco);

    let desconto =  (preco*0.1);

    let descontoAplicado = preco-desconto;

    let res = window.document.getElementById('res');

    res.innerHTML = `<h2>Calculando o desconto de 10% para ${txtProduto}</h2>`;

    res.innerHTML += `<p>O preço original era R$${preco.toFixed(2)}. </p>`;

    res.innerHTML += `<p>Você acaba de ganhar R$${desconto.toFixed(2)} de desconto (-10%).</p>`;

    res.innerHTML += `<p>No fim, você vai pagar R$${descontoAplicado.toFixed(2)} no produto ${txtProduto}</p>`;
}