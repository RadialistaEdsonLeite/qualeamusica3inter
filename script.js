document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/AsTearsGoBy-TheRollingStones.mp3",
      correct: "As Tears Go By",
      options: ["As Tears Go By", "Don’t Go Breaking My Heart", "I Will Survive", "Stayin' Alive"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/AWhiterShadeofPale-ProcolHarum.mp3",
      correct: "A Whiter Shade of Pale",
      options: ["If You Love Me", "A Whiter Shade of Pale", "Band on the Run", "If I Can’t Have You"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/DoYouLoveMe-Sharif%20DeanAndEvelineDHaese.mp3",
      correct: "Do You Love Me",
      options: [
        "Rocket Man",
        "Rhinestone Cowboy",
        "Do You Love Me",
        "Fame"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/ExcuseMe-Junior.mp3",
      correct: "Excuse Me",
      options: [
        "Wasted Days",
        "I’m Not in Love",
        "The Hustle",
        "Excuse Me"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/NoMoreTroubles-SharifDean.mp3",
      correct: "No More Troubles",
      options: [
        "Take It to the Limit",
        "The Night the Lights",
        "No More Troubles",
        "The Chain"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/SelfPity-MargrietEshuijs.mp3",
      correct: "Self Pity",
      options: [
        "Self Pity",
        "Go Your Own Way",
        "Do You Feel Like We Do",
        "I Want You to Want Me"
      ]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/YouNeededMe-AnneMurray.mp3",
      correct: "You Needed Me",
      options: ["Love Rollercoaster", "You Ain’t Seen Nothing Yet", "I Will Survive", "You Needed Me"]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/TheEnd-EarlGrant.mp3",
      correct: "The End",
      options: [
        "Free Bird",
        "Heart of Glass",
        "The End",
        "Sweet Emotion"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/TheresNoMoreCornOnTheBrasos-TheWalkers.mp3",
      correct: "Theres No More Corn On The Brasos",
      options: [
        "Dream On",
        "Walk This Way",
        "Theres No More Corn On The Brasos",
        "If You Love Me"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica3inter/WhenYoureGone-MaggieMacNeal.mp3",
      correct: "When Youre Gone",
      options: [
        "When Youre Gone",
        "Living for the City",
        "The Way We Were",
        "If I Can’t Have You"
      ]
    }

    // ... (as outras músicas aqui)
  ];

  // Descrições das músicas
  const descriptions = [
    "The Rolling Stones 📌 Uma das primeiras músicas originais dos Stones, composta por Mick Jagger e Keith Richards. Diferente do rock energético da banda, essa canção traz um tom melancólico e orquestrado, mostrando uma faceta mais introspectiva do grupo.",
    
    "Procol Harum. 📌 Um dos maiores hinos do rock progressivo dos anos 60, inspirado na música clássica de Bach. O som etéreo e os versos enigmáticos fizeram da faixa um clássico atemporal, com interpretações variadas sobre seu verdadeiro significado.",
    
    "Sharif Dean & Eveline D’Haese. 📌 Essa canção de 1973 foi um grande sucesso na Europa, misturando pop e soft rock com um dueto marcante. Sharif Dean, de origem argelina, estudou na Bélgica e ficou conhecido por esse hit romântico com uma pegada quase teatral.",
    
    "📌 Junior (José María González), cantor espanhol dos anos 70 e 80, lançou essa balada pop marcante. Ele fazia parte da dupla Juan & Junior, que teve grande sucesso na música espanhola antes de seguir carreira solo.",
    
    "Sharif Dean. 📌 Outra canção do cantor Sharif Dean, que traz sua voz suave e envolvente. Embora não tenha sido tão famosa quanto Do You Love Me, esta música - No More Troubles - reflete bem o estilo romântico e melancólico do artista.",
    
    "Margriet Eshuijs. 📌 Margriet Eshuijs foi uma cantora holandesa de pop e jazz, mais conhecida por integrar a banda Lucifer, que lançou o hit House for Sale. Self Pity é uma das suas interpretações emocionantes, mostrando sua voz forte e expressiva.",
    
    "Anne Murray. 📌 Um dos maiores sucessos de Anne Murray, lançado em 1978. A música rendeu a ela um Grammy e se tornou um clássico das baladas românticas, sendo regravada por diversos artistas ao longo dos anos.",
    
    "Earl Grant. 📌 Canção de 1958 que se tornou um clássico do jazz e R&B. Earl Grant, um talentoso cantor e pianista, é frequentemente comparado a Nat King Cole devido ao timbre suave de sua voz. A música transmite uma sensação romântica e nostálgica.",
    
    "The Walkers 📌 Uma curiosa canção folk lançada pela banda holandesa The Walkers em 1971. O tema da música se inspira em canções tradicionais dos EUA, com uma melodia cativante e um toque de country rock europeu.",
    
    "Maggie MacNeal. 📌 Maggie MacNeal, cantora holandesa, ficou famosa por representar os Países Baixos no Eurovision em 1974. When You’re Gone é uma balada nostálgica que destaca sua voz única e expressiva."
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
    questionText.textContent = "Ouça, responda e marque pontos!";
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
  commentsHTML += `<p><strong>>>> "${questions[i].correct}":</strong> ${descriptions[i]}</p>`;
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
