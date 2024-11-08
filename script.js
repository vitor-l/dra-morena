const messages = [
  "Eu te amo!",
  "Você já é doutora, só não sabe disso ainda.\nOlha o tanto que você cuida das pessoas!",
  "Você é mais gostosa do que bala Fini!\n(A Beijos ainda hein)",
  "Seu sorriso é a 2ª coisa mais linda do mundo,\nsó perde pros seus grandes glúteos 😉",
  "Queria entender como uma pessoa pode ser tão perfeita igual você...",
  "O tesouro do One Piece é ter a chance de te dar umas beijocas 😘",
  "🚑 🚑 🚑\nChamando Dra. Morgana, o paciente Vítor\nprecisa de você urgente!",
  "Cuidado, hein? Daqui a pouco a Disney vem atrás de você, princesa.",
  "ENEM = Ela Nunca Errou, Monas",
  "Você tá pronta pra quebrar o MEC na porrada 😠",
  "Minha mãe dizia que o perigo da vida eram as drogas,\nmas ela nunca me avisou da morena baixinha cacheada com a bunda grande 😌",
  "#teammorgana",
  "Morgana, a única doutora sem doutorado!",
  "Você é a única pessoa que fez parte do Castelo Rá-Tim-Bum e\ndas histórias do Rei Artur",
  "A foto do meio é você vestida de médica 🤭",
];

function showMessage() {
  const index = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[index];
}
