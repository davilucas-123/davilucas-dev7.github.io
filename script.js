const btnTopo = document.getElementById("btn-topo");

if (btnTopo) {
  const atualizarBotaoTopo = () => {
    btnTopo.style.display = window.scrollY > 320 ? "inline-grid" : "none";
  };
  window.addEventListener("scroll", atualizarBotaoTopo, { passive: true });
  btnTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  atualizarBotaoTopo();
}
