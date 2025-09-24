let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let cron;
let p = document.querySelector(".display");

function start() {
    clearInterval(cron);
    cron = setInterval(timer, 10);
}

function timer() {
    milissegundos++;
    if (milissegundos === 100) {
        milissegundos = 0;
        segundos++;
    }
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    p.innerHTML =
        (horas < 10 ? '0' + horas : horas) + ':' +
        (minutos < 10 ? '0' + minutos : minutos) + ':' +
        (segundos < 10 ? '0' + segundos : segundos) + ':' +
        (milissegundos < 10 ? '0' + milissegundos : milissegundos);
}

function stop() {
    clearInterval(cron);
}

function reset() {
    clearInterval(cron);
    milissegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    p.innerHTML = "00:00:00:00";
}
