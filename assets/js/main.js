let boton = document.getElementById('btn');
let imagen = document.getElementById('img');
let txt = document.getElementById('txt');
let txtInicio = document.getElementById('txtInicio');

function numeroMoneda (){
imagen.src = './assets/img/loading.gif';
txt.innerHTML = `Lanzando la moneda...`
txtInicio.style.display = 'none';
    setTimeout(function(){
        let numeroRandom = Math.round(Math.random() * (1 - 0) + 0);
        if(numeroRandom === 1){
            txt.innerHTML = `CARA`;
            imagen.src = './assets/img/cara.png';
        } else{
            txt.innerHTML = `SECA`;
            imagen.src = './assets/img/seca.png';
            }
     }, 2000);
}

boton.addEventListener('click', numeroMoneda);

