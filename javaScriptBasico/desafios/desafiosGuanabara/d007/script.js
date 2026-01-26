let converter = window.document.getElementById('converter');

let txtDolar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?');

converter.addEventListener('click', function(){

    let dolar = Number(txtDolar);

    let txtCarteira = window.prompt('Quantos R$ você tem na carteira?');

    let carteira = Number(txtCarteira);

    let valorConvertido = carteira/dolar;

    let res = window.document.getElementById('res');

    res.innerHTML = `<p>O valor de R$${carteira.toFixed(2)} em US$ é de US$${valorConvertido.toFixed(2)}`;

});