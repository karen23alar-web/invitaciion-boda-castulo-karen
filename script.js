// ===== CONTADOR =====
const fechaBoda = new Date("December 5, 2026 15:00:00").getTime();

function actualizarContador() {

const ahora = new Date().getTime();

const diferencia = fechaBoda - ahora;

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

document.getElementById("dias").textContent = dias;
document.getElementById("horas").textContent = horas;
document.getElementById("minutos").textContent = minutos;
document.getElementById("segundos").textContent = segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();


// ===== MÚSICA =====

const musica = document.getElementById("musica");

document.body.addEventListener("click",()=>{

if(musica){

musica.play().catch(()=>{});

}

},{once:true});
