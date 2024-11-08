const messages = [
  "Mensagem 1: Tenha um ótimo dia!",
  "Mensagem 2: Continue assim!",
  "Mensagem 3: Você é incrível!",
  "Mensagem 4: Acredite no seu potencial!",
  "Mensagem 5: Cada passo conta!",
];

function showMessage() {
  const index = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[index];
}
