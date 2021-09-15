"use strict"
 
const lampada = document.getElementById('lampada')
 
const botoesLigaDesliga = (estadoLiga, estadoDesliga, estadoPiscar) =>{    
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
        botoesLigaDesliga(true, false, false)
    }   
}
 
const desligarLampada = () => {
 
    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
}
 
const quebrarLampada = () => {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
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
        botaoPiscar.style.backgroundColor = "Red"
        
       
    } else {
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
        botaoPiscar.style.backgroundColor = "Green"
        
    }
}

 
//eventos
document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click", desligarLampada)
document.getElementById('lampada').addEventListener("mouseover", ligarLampada)
document.getElementById('lampada').addEventListener("mouseleave", desligarLampada)
document.getElementById('lampada').addEventListener("dblclick", quebrarLampada) 