function verificar(){
    let txtAnoNascimento = window.document.querySelector('input.txtAno');

    let anoNascimento = Number(txtAnoNascimento.value);

    let getYear = new Date();
    let anoAtual = getYear.getFullYear();

    let idade = anoAtual - anoNascimento;

    let res = window.document.getElementById('res');

    let sexo = window.document.getElementsByName('radsex');

    let image = window.document.createElement('img');
    image.setAttribute('id', 'foto');

    if(txtAnoNascimento.value.length == 0 || anoNascimento > anoAtual){
        window.alert('[ERROR] Verifique os dados e preencha novamente!');
    } else{
        if(idade >= 0 && idade <= 12 && sexo[0].checked){
            res.innerHTML = `<p>Detectamos homem de ${idade} anos</p>`
            image.setAttribute('src','images/criança-M.png')

        } else if(idade > 12 && idade <= 18 && sexo[0].checked){
            res.innerHTML = `<p>Detectamos homem de ${idade} anos</p>`

            image.setAttribute('src','images/adolescente-M.png')
            
        } else if(idade > 18 && idade <= 50 && sexo[0].checked){
            res.innerHTML = `<p>Detectamos homem de ${idade} anos</p>`

            image.setAttribute('src','images/adulto-M.png')
            
        } else if(idade > 50 && sexo[0].checked){
            res.innerHTML = `<p>Detectamos homem de ${idade} anos</p>`

            image.setAttribute('src','images/idoso-M.png')
            
        } else if(idade >= 0 && idade <= 12 && sexo[1].checked){
            res.innerHTML = `<p>Detectamos mulher de ${idade} anos</p>`

            image.setAttribute('src','images/criança-F.png')
            
        } else if(idade > 12 && idade <= 18 && sexo[1].checked){
            res.innerHTML = `<p>Detectamos mulher de ${idade} anos</p>`

            image.setAttribute('src','images/adolescente-F.png')
            
        } else if(idade > 18 && idade <= 50 && sexo[1].checked){
            res.innerHTML = `<p>Detectamos mulher de ${idade} anos</p>`

            image.setAttribute('src','images/adulto-F.png')
            
        } else if(idade > 50 && sexo[1].checked){
            res.innerHTML = `<p>Detectamos mulher de ${idade} anos</p>`

            image.setAttribute('src','images/idoso-F.png')
            
        }
    }

    res.appendChild(image);
}