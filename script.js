const botao = document.querySelector("button");
const divBotao = botao.querySelector("div");
const link = botao.querySelector("a");

botao.addEventListener("click", () => {
  link.textContent = "JÁ JOGANDO!";
  divBotao.style.backgroundColor = "#ff4444";
});
