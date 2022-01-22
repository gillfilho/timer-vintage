let entradaMinutos = document.getElementById("entrada-minutos");

let min = document.getElementById("minutos");
let sec = document.getElementById("segundos");

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let timer; 

entradaMinutos.addEventListener("change", () => {
    min.innerText = entradaMinutos.value;
})


start.addEventListener('click', () => {  
    if (timer != undefined) {
        alert("Timer já iniciado");
    } else timer = setInterval(iniciarTimer, 1000);
})

reset.addEventListener('click', resetTimer);

pause.addEventListener('click', pauseTimer);

function iniciarTimer() {    
    if(sec.innerText != 0){
        sec.innerText--;
    } else if (min.innerText != 0 && sec.innerText == 0) {
        sec.innerText = 59;
        min.innerText--;    
    } 
}

function resetTimer() {
    min.innerText = 25;
    sec.innerText = "00";
    clearInterval(timer);
    timer = undefined;
}


function pauseTimer() {
    clearInterval(timer);
    timer = undefined;
}