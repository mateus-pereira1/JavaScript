function converter(){
    let res = window.document.getElementById('res');

    let txtDistancia = window.prompt('Digite uma distância em metros (m)');

    let distancia = Number(txtDistancia);

    res.innerHTML = `<h2>A distância de ${distancia} em metros, corresponde a ...`
    
    let km = distancia/1000
    let Hm = distancia/100
    let Dam = distancia/10
    let dm = distancia*10
    let cm = distancia*100
    let mm = distancia*1000

    let arrayDistancia = [km, Hm, Dam, dm, cm, mm];

    let arrayUnidade = ['km', 'Hm', 'Dam', 'dm', 'cm', 'mm'];

    for(let i = 0; i<= 5; i++){
        res.innerHTML += `<p>${arrayDistancia[i]} (${arrayUnidade[i]})`
    }



}