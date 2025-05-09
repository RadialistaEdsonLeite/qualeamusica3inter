document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

 function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-image").src = question.image;
  document.getElementById("description").textContent = question.description;
  audio.src = question.song;
  audio.play();

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  // Criar botões em duas colunas
  const column1 = document.createElement("div");
  const column2 = document.createElement("div");
  column1.className = "option-column";
  column2.className = "option-column";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = `${option.name} - ${option.artist}`;
    button.onclick = () => checkAnswer(option, button);
    if (index % 2 === 0) {
      column1.appendChild(button);
    } else {
      column2.appendChild(button);
    }
  });

  optionsContainer.appendChild(column1);
  optionsContainer.appendChild(column2);
}

  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("playerScore")) || 0;
  const audio = document.getElementById("audio");
  const optionsContainer = document.getElementById("options");
  const questionText = document.getElementById("question");
  const scoreText = document.getElementById("score");
  const gameContainer = document.getElementById("game");
  const finalScreen = document.getElementById("final-screen");

  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showFinalScreen();
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.src = q.song;
    questionText.textContent = "Clique no play, ouça e responda!";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.innerHTML = `<strong>${option.name}</strong><br><i>${option.artist}</i>`;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option.name, option.artist);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio.play().catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(selectedName, selectedArtist) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (selectedName === q.name && selectedArtist === q.artist) {
      score += 10;
    } else {
      score -= 5;
    }

    localStorage.setItem("playerScore", score);
    scoreText.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }

  function showFinalScreen() {
    audio.pause();
    audio.currentTime = 0;

    gameContainer.style.display = "none";
    finalScreen.style.display = "block";
    finalScreen.innerHTML = `
      <h1 style="color: red; font-weight: bold; font-size: 1.5em;">Parabéns! Você já está com ${score} pontos!</h1>
      <div>${generateFinalComments()}</div>
      <div class="buttons-container">
          <button id="restart-btn">Jogar Novamente</button>
          <button id="exit-btn">Fechar o Jogo</button>
      </div>
    `;

    document.getElementById("restart-btn").addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function generateFinalComments() {
  return questions
    .map(
      (q) => `
        <div style="margin-bottom: 5px; text-align: center;">
          <p>↴  ↴  ↴</p> <!-- Aqui está o texto com os asteriscos -->
          <strong>${q.name} - ${q.artist}</strong>
          <img src="${q.image}" alt="${q.name}" style="width: ${IMAGE_SIZE}px; height: ${IMAGE_SIZE}px; display: block; margin: 5px auto;">
          <p>${q.description}</p>
        </div>
      `
    )
    .join("");
}


  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0;
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }

  function exitGame() {
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML";
  }

  scoreText.textContent = `Pontuação: ${score}`; // Exibe a pontuação ao iniciar
  loadQuestion();
});
