// Rolagem suave APENAS para o menu do header
document.querySelectorAll('header .nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Botão voltar ao topo
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

console.log("Rolagem suave ajustada.");
