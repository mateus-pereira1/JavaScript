function gerarTabuada(){
    
    //Selecionar objetos da tela
    let txtNumber = window.document.getElementById('txtNumber');
    let res = window.document.getElementById('selTab');
    //Transforma a variável String em numérica
    let number = Number(txtNumber.value);
    let mult

    if(txtNumber.value.length == 0){
        window.alert('[ERROR] Digite um número para iniciar!');
    } else{
        res.innerText = ``;
        for(let i = 0; i <= 10; i++){
            mult = number*i;
            res.innerHTML += `<option> ${number} x ${i} = ${mult} </option>`
        }
    }

}