function contar(){
    //Pega os valores em String do input
    let txtInicio = window.document.getElementById('txtInicio');

    let txtFim = window.document.getElementById('txtFim');

    let txtPasso = window.document.getElementById('txtPasso');

    let res = window.document.getElementById('res');

    //Transforma os valores de String em tipo number
    let inicio = Number(txtInicio.value);

    let fim = Number(txtFim.value);

    let passo = Number(txtPasso.value);

    if(txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0){
        res.innerText = `Impossível contar!`
    } else{
        if(passo == 0 ){
            window.alert('[ERROR] Impossível contar com passo 0. Passo será considerado 1')
            passo = 1;
            if(inicio < fim){
                res.innerText = ``;
                for(i = inicio; i <= fim; i = i+passo){
                    res.innerText += `${i} 👉 `
                }
                res.innerText += `🏁`;

            } else if(inicio > fim){
                res.innerText = ``;
                 for(i = inicio; i >= fim; i = i-passo){
                    res.innerText += `${i} 👉 `
                    }
                    res.innerText += `🏁`;
                }
        } else{
            if(inicio < fim){
                res.innerText = ``;
                for(i = inicio; i <= fim; i = i+passo){
                    res.innerText += `${i} 👉 `
                }
                res.innerText += `🏁`;

            } else if(inicio > fim){
                res.innerText = ``;
                 for(i = inicio; i >= fim; i = i-passo){
                    res.innerText += `${i} 👉 `
                    }
                    res.innerText += `🏁`;
                }
        }
    }




}