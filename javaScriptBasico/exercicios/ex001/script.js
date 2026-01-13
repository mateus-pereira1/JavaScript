let getSystemHours = new Date();

let horaAtual = getSystemHours.getHours();

let corpo = window.document.getElementsByTagName('body')[0];

let res = window.document.querySelector('div.res');

let image = window.document.querySelector('div.image');

res.innerHTML = `<p>Agora são ${horaAtual} horas`;

if(horaAtual >= 6 && horaAtual <= 12){
    corpo.style.background = 'rgb(248, 231, 133)'

    image.innerHTML = '<img src="images/manha.jpg" alt="Imagem da manhã"></img>'
} else if(horaAtual >= 12 && horaAtual < 18){
    corpo.style.background = 'rgba(251, 164, 4, 0.529)';

    image.innerHTML = '<img src="images/tarde.jpg" alt="Imagem da tarde"></img>'
} else{
    corpo.style.background = 'rgb(48, 48, 48)';

    image.innerHTML = '<img src="images/noite.jpg" alt="Imagem da tarde"></img>'
}



