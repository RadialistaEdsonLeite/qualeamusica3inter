document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300;
  let currentQuestionIndex = 0;
  let score = parseInt(localStorage.getItem("playerScore")) || 0;

  const audio = document.getElementById("audio");
  const optionsContainer = document.getElementById("options");
  const questionText = document.getElementById("question");
  const scoreText = document.getElementById("score");
  const gameContainer = document.getElementById("game");
  const finalScreen = document.getElementById("final-screen");

  function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-image").src = question.image;
    document.getElementById("description").textContent = question.description;
    audio.src = question.song;
    audio.play();

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

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

  function checkAnswer(selectedOption, buttonElement) {
    const correctAnswer = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-button");

    buttons.forEach(button => button.disabled = true);

    if (selectedOption.name === correctAnswer.name && selectedOption.artist === correctAnswer.artist) {
      score++;
      buttonElement.classList.add("correct");
    } else {
      buttonElement.classList.add("wrong");
      buttons.forEach(button => {
        if (button.textContent.includes(`${correctAnswer.name} - ${correctAnswer.artist}`)) {
          button.classList.add("correct");
        }
      });
    }

    localStorage.setItem("playerScore", score);

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showFinalScreen();
      }
    }, 2000);
  }

  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showFinalScreen();
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.src = q.song;
    questionText.textContent = "Clique no play, ouça e responda!";
    optionsContainer.innerHTML = "";

    showQuestion();
    scoreText.textContent = `Pontuação: ${score}`;
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
          <p>↴  ↴  ↴</p>
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

  scoreText.textContent = `Pontuação: ${score}`;
  loadQuestion();
});
