const sobre = document.getElementById("sobreImg");

sobre.addEventListener("click",()=>{

sobre.style.transform="scale(1.08)";
sobre.style.opacity="0";

setTimeout(()=>{
window.location.href="noscasamos.html";
},800);

});
