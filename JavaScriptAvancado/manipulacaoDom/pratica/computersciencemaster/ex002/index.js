let names = window.document.getElementById('name');

let nomesLista = window.document.querySelectorAll('.item')


names.addEventListener('input', (event)=>{
    let buscador = event.target.value.toLowerCase();


    nomesLista.forEach(function(nomes, index){
        let verificaTexto = nomes.textContent.toLocaleLowerCase();
        if(buscador === ''){
            nomes.classList.remove('negrito')
        } else if(verificaTexto.includes(buscador)){
          nomes.classList.add('negrito')  
        } else{
            nomes.classList.remove('negrito')
        }
    });

});
