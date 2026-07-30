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


/* ===================================
   APERTURA DEL SOBRE
=================================== */

document.addEventListener("DOMContentLoaded", () => {
  const pantallaSobre = document.getElementById("pantalla-sobre");
  const botonAbrir = document.getElementById("abrir-invitacion");

  // Bloquea el desplazamiento hasta abrir la invitación.
  document.body.classList.add("invitacion-bloqueada");

  if (pantallaSobre && botonAbrir) {
    let invitacionAbierta = false;

    botonAbrir.addEventListener("click", () => {
      if (invitacionAbierta) return;

      invitacionAbierta = true;
      botonAbrir.classList.add("abierto");
       const audioBoda = document.getElementById("musica");

if (audioBoda) {
    audioBoda.volume = 0.7;
    audioBoda.play().catch((e) => {
        console.log("No se pudo reproducir la música:", e);
    });
}
       

      // Espera a que termine de abrirse el sobre.
      setTimeout(() => {
        pantallaSobre.classList.add("oculta");
        document.body.classList.remove("invitacion-bloqueada");

        // Inicia la música únicamente si ya tienes un audio con este ID.
        
      }, 1500);

      // Elimina la pantalla después de la animación.
      setTimeout(() => {
        pantallaSobre.remove();
      }, 2700);
    });
  }


  /* ===================================
     APARICIÓN DE ELEMENTOS AL BAJAR
  =================================== */

  const elementosAnimados = document.querySelectorAll(
    ".revelar, .revelar-izquierda, .revelar-derecha"
  );

  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    elementosAnimados.forEach((elemento) => {
      observador.observe(elemento);
    });
  } else {
    // Compatibilidad con navegadores antiguos.
    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("visible");
    });
  }
});
// ===== PÉTALOS =====

const contenedorPetalos = document.getElementById("petalos-container");

function crearPetalo() {
  if (!contenedorPetalos) return;

  const petalo = document.createElement("div");
  petalo.classList.add("petalo");

  petalo.style.left = Math.random() * 100 + "vw";
  petalo.style.animationDuration = (6 + Math.random() * 5) + "s";
  petalo.style.transform = `rotate(${Math.random() * 360}deg)`;

  contenedorPetalos.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 11000);
}

setInterval(crearPetalo, 500);
