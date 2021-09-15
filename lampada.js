"use strict"
 
const lampada = document.getElementById('lampada')
 
const botoesLidaDesliga = (estadoLiga, estadoDesliga, estadoPiscar) =>{    
    const botaoLigar = document.getElementById('ligar')
    const botaoDesligar = document.getElementById('desligar')
    const botaoPiscar = document.getElementById('piscar')
 
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
    botaoPiscar.disabled = estadoPiscar
}
 
const lampadaQuebrada = () =>{
    const lampada = document.getElementById("lampada")
    return lampada.src.indexOf('quebrada') !== -1
}
 
const ligarLampada = () => {
    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        botoesLidaDesliga(true, false)
    }   
}
 
const desligarLampada = () => {
 
    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesLidaDesliga(false, true)
    }
}
 
const quebrarLampada = () => {
    lampada.src = "img/quebrada.jpg"
    botoesLidaDesliga(true, true)
    botaoPiscar.classList.remove("green")
    botaoPiscar.classList.remove("red")
}

const pararPiscar = () => {
    clearInterval(document.getElementById('ligar'))
    clearInterval(document.getElementById('desligar'))

}

const piscarlampada = () => {
    const botaoPiscar = document.getElementById("piscar")

    if (botaoPiscar.textContent == "Piscar") {
        document.getElementById= (ligarLampada, 500)
        document.getElementById = (desligarLampada, 1000)
        botaoPiscar.textContent = "parar"
        botaoPiscar.classList.remove("green")
        botaoPiscar.classList.add("red")
    } else {
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
        botaoPiscar.classList.remove("red")
        botaoPiscar.classList.add("green")
    }
}

 
// eventos

id("ligar").addEventListener("click", ligarLampada)

id('desligar').addEventListener("click", desligarLampada)

id("lampada").addEventListener("mouseover", ligarLampada)

id("lampada").addEventListener("mouseleave", desligarLampada)

id("lampada").addEventListener("dblclick", quebrarLampada)

id("piscar").addEventListener("click", piscarlampada)