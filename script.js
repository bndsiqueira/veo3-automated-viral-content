// === Scroll suave para todos os links internos ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Exibir botão flutuante ao rolar a página ===
const botaoFlutuante = document.querySelector('.botao-flutuante');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    botaoFlutuante.style.display = 'block';
  } else {
    botaoFlutuante.style.display = 'none';
  }
});

// === Timer de escassez falsa (reinicia a cada visita) ===
function iniciarContador() {
  const elemento = document.querySelector("#contador-falso");
  let tempo = 600; // 10 minutos

  const intervalo = setInterval(() => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    elemento.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    tempo--;

    if (tempo < 0) {
      clearInterval(intervalo);
      elemento.textContent = "00:00";
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarContador);

// === Atualizar mensagem de escassez com data de hoje ===
const dataHoje = new Date();
const formatoData = dataHoje.toLocaleDateString("pt-BR", {
  day: "2-digit", month: "2-digit", year: "numeric"
});
const escassez = document.querySelector(".data-hoje");
if (escassez) {
  escassez.textContent = formatoData;
}
const countdownEl = document.getElementById("countdown");
let tempoRestante = 289; // 4 minutos e 49 segundos

const atualizarTimer = setInterval(() => {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  countdownEl.textContent = `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
  tempoRestante--;

  if (tempoRestante < 0) {
    clearInterval(atualizarTimer);
    countdownEl.textContent = "expirado";
    document.getElementById("timer-container").classList.add("opacity-50");
  }
}, 1000);