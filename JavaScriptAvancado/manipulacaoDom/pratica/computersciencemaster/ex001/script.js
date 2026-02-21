let button = window.document.getElementById('iniciaTabuada');
let res = window.document.getElementById('res');

button.addEventListener('click', () =>{
    res.innerHTML = ``;

    let txtNum = window.document.getElementById('txtNumber');
    let num = Number(txtNum.value);
    let mult;

    for(let i = 0; i <= 10; i ++){
        mult = num * i;
        res.innerHTML += `<p>${num} x ${i} = ${mult} </p>`;
    }

});