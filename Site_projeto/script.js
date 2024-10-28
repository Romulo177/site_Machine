let currentIndex = 0;
let index = 0;
let text = ""; // Variável global para o texto a ser digitado
const typingOutputs = document.querySelectorAll(".typing-output");
let typingTimeout; // Variável para armazenar o timeout

function setTextBasedOnSlide() {
  // Define o conteúdo do texto com base no índice do slide
  if (currentIndex === 0) {
    text = "No coração de Lumi, onde a luz de Hemera, a deusa do dia, banha as terras com seu esplendor dourado, surge a Guilda dos Discípulos de Hemera. Forjada nos desafios e adversidades, a guilda reúne um grupo singular de heróis com habilidades e histórias distintas, entrelaçadas pelo destino. Zeriel Heósforo, outrora um jovem devoto de Hemera, testemunhou a destruição de sua vila pelas sombras vorazes. Em resposta à sua fé inabalável, Hemera o transformou em um guardião da luz, imbuindo-o de poderes celestiais. Atormentado pela tragédia, ele busca redenção protegendo os inocentes e combatendo as trevas que assolam Lumi. Mantis pennata, a guerreira mantis, nômade e enigmática, traz consigo a força e a liberdade de um espírito indomável. Sua lança, testemunha de um passado misterioso, a acompanha em sua jornada por Lumi, onde encontrou um novo propósito junto aos Discípulos de Hemera. Rhaegar Kamoris, o cavaleiro imponente e disciplinado, segue o Caminho da Espada e a filosofia da União Total. Sua lealdade ao reino e sua busca por redenção o impulsionam a defender Lumi ao lado dos Discípulos de Hemera, após um incidente que o baniu da Taverna do Sol e manchou sua reputação.Unidos por um fio tênue de fé e pelo desejo de proteger Lumi, os Discípulos de Hemera enfrentam as sombras que ameaçam o reino.  Juntos eles trilham um caminho de desafios e superação,  iluminando o mundo com a chama da esperança."; // Conteúdo do slide 1
  } else if (currentIndex === 1) {
    text = "Antigamente, Zeriel era um humano comum, nascido em uma vila pacífica ao norte de Lumi e devoto da deusa Hemera. Durante uma noite de tempestade, sua vila foi atacada por criaturas sombrias que buscavam destruir os seguidores da luz. Zeriel, ainda jovem, orou com fervor para que a deusa os protegesse. Hemera, tocada por sua devoção, o transformou em um guardião da luz, um ser angelical, mestre em feitiçaria luminosa e com poderes de cura e proteção."; // Conteúdo do slide 2
  } else if (currentIndex === 2) {
    text = "Mantis pennata é uma visitante do reino de Lumi. Apesar de ser uma estrangeira semi-nômade, o sol parece brilhar mais quando Mantis está em Lumi. Meio louva-a-Deus meio humana, ela é uma das mais bravas guerreiras mercenárias do continente, conhecida por suas habilidades de luta corpo a corpo, levando consigo uma lança apenas pelo valor emocional que carrega. Não abre mão da sua liberdade, por isso não faz parte de nenhuma legião ou batalhão, apesar de ultimamente ter se tornado parte de uma guilda, conhecida como Discípulos de Hemera. Se estiver curioso sobre as tendências canibais de Mantis, vai ter que testar a sorte."; // Conteúdo do slide 3
  } else {
    text = "Rhaegar Kamoris é mais um integrante do Reino de Lumi. Faz parte da Guilda dos Cavaleiros, também conhecida como o Caminho da Espada. A filosofia da União Total contribuiu para seu desenvolvimento pessoal, melhorando suas habilidades individuais e em equipe, formando uma comunidade sólida e treinada para defender o Reino até a morte. Tem muita dedicação e treino constante, mantendo seu foco na hora das batalhas mas sendo descontraído nas horas vagas. É alto para um humano, com 1.95 metros de altura e possui uma moto potente, ajudando a percorrer longas distâncias e a localizar inimigos. Frequentava assiduamente a Taverna do Sol, sendo muito amigo do Cavaleiro Luminoso, o dono da Taverna, porém foi banido para sempre após quebrar uma regra fundamental do estabelecimento."; // Conteúdo do slide 4
  }
}

function typeText() {
  const currentOutput = typingOutputs[currentIndex];
  currentOutput.textContent = ""; // Limpa o conteúdo antes de digitar
  index = 0; // Reseta o índice de digitação

  function typeNextChar() {
    if (index < text.length) {
      currentOutput.textContent += text.charAt(index);
      index++;
      typingTimeout = setTimeout(typeNextChar, 15); // Ajuste o intervalo para mudar a velocidade da "digitação"
    }
  }

  typeNextChar(); // Inicia a digitação do texto
}

function changeSlide(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;

  // Atualiza o índice atual
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Limpa o timeout anterior para interromper a digitação
  clearTimeout(typingTimeout);

  // Define o novo texto e inicia a digitação
  setTextBasedOnSlide();
  typeText(); // Inicia a digitação do novo texto

  // Move o carrossel para o índice atual
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Inicia o texto ao carregar a página
window.onload = () => {
  setTextBasedOnSlide();
  typeText();
};
