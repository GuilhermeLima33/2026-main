let numero = 0

let intervalo = setInterval(function() {
    numero +=100 //De quanto em quanto aumenta
    document.getElementById("contador").innerText = numero

    if(numero >= 1000){
        clearInterval(intervalo)
    }
}, 100)