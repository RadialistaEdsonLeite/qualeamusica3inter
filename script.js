document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/AWhiterShadeofPale-ProcolHarum.mp3",
      correct: "A Whiter Shade of Pale",
      options: ["Bridge Over Troubled Water", "AWhiterShadeofPale-ProcolHarum", "Rock And Roll Lullaby", "Take Me Home, Country Roads"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/AloneAgainNaturally-GilbertOSullivan.mp3",
      correct: "Alone Again Naturally",
      options: ["You needed me", "My way", "Do you wanna dance?", "Alone Again (Naturally)"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/AmericanPie-DonMcLean.mp3",
      correct: "American Pie",
      options: [
        "Let’s Stay Together",
        "Daniel",
        "American Pie",
        "Living for the City"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/Angie-TheRollingStones.mp3",
      correct: "Angie",
      options: [
        "Angie",
        "Goodbye Yellow Brick Road",
        "Angel Of Mine",
        "My Faces"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/AnotherBrickintheWall-PinkFloyd.mp3",
      correct: "Another Brick in the Wall",
      options: [
        "Living for the City",
        "Another Brick in the Wall",
        "The Way We Were",
        "I Shot the Sheriff"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/BabyILoveYourWay-PeterFrampton.mp3",
      correct: "Baby I Love Your Way",
      options: [
        "Rock Your Baby",
        "Can’t Get Enough of Your Love, Babe  ",
        "Baby I Love Your Way",
        "If I Can’t Have You"
      ]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/BadMoonRising-CreedenceClearwaterRevival.mp3",
      correct: "Bad Moon Rising",
      options: ["The Joker", "Bad Moon Rising", "Band on the Run", "If I Can’t Have You"]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/MamyBlue-RickyShayne.mp3",
      correct: "Mamy Blue",
      options: [
        "Rainbow",
        "I Feel Love",
        "Mamy Blue",
        "Please Mr Postman"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/RainRainRain-SimonButterfly.mp3",
      correct: "Rain Rain Rain",
      options: [
        "Blue Moon",
        "Serenade to Cripton",
        "Rain rain rain",
        "My love for you"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica2inter/skylinepigeon_eltonjohn.mp3",
      correct: "Skyline Pigeon",
      options: [
        "I Will Survive",
        "Stayin' Alive",
        "More Than a Woman",
        "Skyline Pigeon"
      ]
    }

    // ... (as outras músicas aqui)
  ];

  // Descrições das músicas
  const descriptions = [
    "B. J. Thomas. Lançada em 1972, é uma das baladas mais emocionantes do rock/pop da época. A música tem uma melodia suave e nostálgica, com um arranjo que mistura o rock clássico com elementos de gospel e doo-wop. A letra conta a história de um menino criado por uma mãe solteira, que encontra conforto nas canções de ninar que ela cantava para ele.",
    "Gilbert O'Sullivan (1972): Uma balada melancólica e introspectiva que aborda temas de solidão e perda, com uma melodia suave contrastando com a letra triste. A interpretação sincera de Gilbert O’Sullivan fez dela um grande sucesso nos anos 70.",
    "Don McLean (1971): Uma das composições mais emblemáticas da música folk-rock, American Pie é um épico de oito minutos que faz referências enigmáticas à cultura americana e à tragédia do The Day the Music Died (a morte de Buddy Holly, Ritchie Valens e Big Bopper em 1959).",
    "The Rolling Stones (1973):  Uma das baladas mais famosas dos Rolling Stones, Angie tem uma melodia delicada e emotiva, com um solo de guitarra inesquecível e a interpretação melancólica de Mick Jagger. Embora haja especulações sobre a inspiração da música, Keith Richards afirmou que o nome foi escolhido aleatoriamente.",
    "Pink Floyd (1979): Um dos maiores sucessos do Pink Floyd, essa música faz parte do álbum The Wall e critica o sistema educacional rígido e opressor. A icônica linha We don’t need no education virou um hino de rebeldia, impulsionado pelo uso inovador de um coral infantil.",
    "Peter Frampton (1975): Uma das músicas mais românticas da década de 70, com uma melodia envolvente e a voz suave de Peter Frampton. Lançada no álbum Frampton Comes Alive!, se tornou uma das canções mais pedidas em rádios e regravada diversas vezes ao longo dos anos.",
    "Creedence Clearwater Revival (1969):  Um rock enérgico e cativante, apesar de sua letra sombria que fala sobre presságios de destruição. A interpretação marcante de John Fogerty e o ritmo acelerado fizeram dessa canção um clássico do rock.",
    "Simon Butterfly (1973):  Uma canção nostálgica e sentimental que se destacou na década de 70. Seu tom melancólico e melodia suave fizeram dela uma das músicas queridas pelos ouvintes da época, embora Simon Butterfly tenha sido um artista de poucos sucessos.",
    "Ricky Shayne: Esta música foi originalmente composta pelo francês Hubert Giraud e gravada pela banda espanhola Pop-Tops, mas ganhou versões em vários idiomas e intérpretes diferentes. Uma das mais conhecidas foi a do cantor Ricky Shayne, que lançou sua versão em alemão e inglês, tornando a canção um grande sucesso na Europa.",
    "Elton John (1969): Essa bela canção, presente no álbum Empty Sky (1969), foi uma das primeiras composições de sucesso da parceria entre Elton John e Bernie Taupin. A música fala sobre liberdade e o desejo de voar para longe, usando a metáfora de um pombo no céu. Curiosidade: Elton John gravou duas versões dessa música. A mais conhecida é a de 1973, regravada com um arranjo emocionante no piano (em vez do cravo usado na versão original)."
    // Adicione as descrições das músicas aqui
    // ...
  ];

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
    questionText.textContent = "Qual é a música?";
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio
        .play()
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(answer) {
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (answer === q.correct) {
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

    finalScreen.style.textAlign = "left";
    finalScreen.style.padding = "20px";

    const q = questions[currentQuestionIndex - 1]; // Última pergunta

    let commentsHTML = "";
for (let i = 0; i < questions.length; i++) {
  commentsHTML += `<p><strong>Sobre "${questions[i].correct}":</strong> ${descriptions[i]}</p>`;
}

    // Atualizando a tela final com a pontuação
    finalScreen.innerHTML = `
    <h1 style="color: red; font-weight: bold; font-size: 2em;">Parabéns! Você já está com ${score} pontos!</h1>
    <p>Sua pontuação final: <strong>${score}</strong> 🎉</p>
    <div>${commentsHTML}</div>
    
    <!-- Contêiner para botões centralizados -->
    <div class="buttons-container">
        <button id="restart-btn">Jogar Novamente</button>
        <button id="exit-btn">Fechar o Jogo</button>
    </div>
  `;

    // Ações dos botões
    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0; // Recupera a pontuação salva
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }
  function exitGame() {
    const newUrl = `https://radialistaedsonleite.github.io/jogos-HTML/?score=${score}`;
    alert("Volte sempre! Até a próxima! 🎶");
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML/";
  }

  scoreText.textContent = `Pontuação: ${score}`;
  loadQuestion();
});
