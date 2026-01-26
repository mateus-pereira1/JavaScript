let converter = window.document.getElementById('converter');

let res = window.document.getElementById('res');


converter.addEventListener('click', function(){
    let txtTemp = window.prompt('Digite uma temperatura em °C (Celsius)');

    
    let temp = Number(txtTemp);

    let F = 1.8*temp +32;

    let K = temp+273;

    res.innerHTML = `<h2>A temperatura de ${temp}°C, corresponde a...`;

    res.innerHTML += `<p>${K}°K (Kelvin)`;
    res.innerHTML += `<p>${F}°F (Fahrenheit)`;

    
});