document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const IMAGE_SIZE = 300; // 🔥 Altere aqui para mudar o tamanho das imagens (ex: 300 para 300x300px)

  const questions = [
        {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/AsTearsGoBy-TheRollingStones.mp3",
      name: "As Tears Go By",
      artist: "The Rolling Stones",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/AsTearsGoBy-TheRollingStones.jpg",
      description: "Uma das primeiras baladas dos Rolling Stones, composta por Mick Jagger, Keith Richards e Andrew Loog Oldham. Curiosamente, a música foi inicialmente oferecida a Marianne Faithfull, que a gravou primeiro e teve um grande sucesso. A versão dos Stones veio depois, tornando-se um dos clássicos da banda.",
      options: [
        { name: "Don’t Go Breaking My Heart", artist: "Elton John" },
        { name: "As Tears Go By", artist: "The Rolling Stones" },
        { name: "Go Your Own Way", artist: "Fleetwood Mac" },
        { name: "Stayin' Alive", artist: "Bee Gees" }
      ] 
    },
         {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/AWhiterShadeofPale-ProcolHarum.mp3",
      name: "A Whiter Shade of Pale",
      artist: "Procol Harum",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/AWhiterShadeofPale-ProcolHarum.jpg",
      description: "Uma das canções mais icônicas do rock psicodélico e progressivo, A Whiter Shade of Pale foi inspirada em Bach e seu órgão barroco. Com uma letra enigmática e atmosfera etérea, a música se tornou um hino dos anos 60 e continua sendo uma das mais tocadas de todos os tempos.",
      options: [
        { name: "If You Love Me", artist: "Morris Albert" },
        { name: "Band on the Run", artist: "The Beatles" },
        { name: "If I Can’t Have You", artist: "Tom Jones" },
        { name: "A Whiter Shade of Pale", artist: "Procol Harum" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/DoYouLoveMe-SharifDeanAndEvelineDHaese.mp3",
      name: "Do You Love Me?",
      artist: "Sharif Dean And Eveline DHaese",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/DoYouLoveMe-SharifDeanAndEvelineDHaese.jpg",
      description: "Um dueto romântico do cantor belga Sharif Dean, que se tornou um grande sucesso na Europa. A música tem um estilo suave e melancólico, com um diálogo musical entre os dois intérpretes sobre o significado do amor.",
      options: [
        { name: "Do You Love Me?", artist: "Sharif Dean And Eveline DHaese" },
        { name: "When a Man Loves a Woman", artist: "Kenny Rogers & Dottie West" },
        { name: "I Love You", artist: "Marvin Gaye & Tammi Terrell" },
        { name: "I'd Love You to Want Me - Lobo", artist: "Lobo And Kiki Dee" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/NoMoreTroubles-SharifDean.mp3",
      name: "No More Troubles",
      artist: "Sharif Dean",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/NoMoreTroubles-SharifDean.jpg",
      description: "Outro sucesso do cantor Sharif Dean, conhecido por seu estilo romântico e profundo. No More Troubles segue a mesma linha de suas músicas anteriores, com letras reflexivas e melodia envolvente.",
      options: [
        { name: "Take It to the Limit", artist: "Alphaville" },
        { name: "The Night the Lights", artist: "New Kids" },
        { name: "No More Troubles", artist: "Sharif Dean" },
        { name: "Mandy", artist: "Barry Manilow" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/ExcuseMe-Junior.mp3",
      name: "Excuse Me",
      artist: "Junior",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/ExcuseMe-Junior.jpg",
      description: "Canção do cantor e compositor espanhol Junior (Antonio Morales Barreto), ex-integrante do grupo Los Brincos. Excuse Me é uma balada romântica, conhecida por sua melodia delicada e interpretação emotiva.", 
      options: [
        { name: "I’m Not in Love", artist: "10cc" },
        { name: "Excuse Me", artist: "Junior" },
        { name: "The Hustle", artist: "The Byrds" },
        { name: "Wasted Days", artist: "Cheap Trick" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/SelfPity-MargrietEshuijs.mp3",
      name: "Self Pity",
      artist: "Margriet Eshuijs",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/SelfPity-MargrietEshuijs.jpg",
      description: "Cantora holandesa de pop e jazz, Margriet Eshuijs fez sucesso com essa música de tom melancólico e introspectivo. Ela também foi vocalista da banda Lucifer, conhecida pelo hit House for Sale.",
      options: [
        { name: "Go Your Own Way", artist: "Alicia Bridges" },
        { name: "Do You Feel Like We Do", artist: "Barbra Streisand" },
        { name: "I Want You to Want Me", artist: "Diana Ross" },
        { name: "Self Pity", artist: "Margriet Eshuijs" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/YouNeededMe-AnneMurray.mp3",
      name: "You Needed Me",
      artist: "Anne Murray",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/YouNeededMe-AnneMurray.jpg",
      description: "Canção vencedora do Grammy, You Needed Me foi um dos maiores sucessos da cantora canadense Anne Murray, marcando seu retorno ao topo das paradas. A música, escrita por Randy Goodrum, fala sobre amor incondicional e foi um grande hit da música country e pop, alcançando o primeiro lugar na Billboard Hot 100.",
      options: [
        { name: "Love Rollercoaster", artist: "Gloria Gaynor" },
        { name: "You Needed Me", artist: "Anne Murray" },
        { name: "You Ain’t Seen Nothing Yet", artist: "Carole King" },
        { name: "I Will Survive", artist: "Bonnie Tyler" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/TheEnd-EarlGrant.mp3",
      name: "The End",
      artist: "Earl Grant",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/TheEnd-EarlGrant.jpg",
      description: "Embora lançada no final dos anos 50, The End de Earl Grant permaneceu popular nos anos 70. Uma canção romântica e suave, com a inconfundível interpretação ao piano e órgão do cantor e instrumentista de jazz e R&B.",
      options: [
        { name: "Free Bird", artist: "Kenny Rogers" },
        { name: "Heart of Glass", artist: "Marvin Gaye" },
        { name: "The End", artist: "Earl Grant" },
        { name: "Sweet Emotion", artist: "Louis Armstrong" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/TheresNoMoreCornOnTheBrasos-TheWalkers.mp3",
      name: "Theres No More Corn On The Brasos",
      artist: "The Walkers",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/TheresNoMoreCornOnTheBrasos-TheWalkers.jpg",
      description: "Essa música da banda holandesa The Walkers se destacou na Europa por sua melodia folk e letra melancólica, que fala sobre o fim de uma colheita e suas metáforas sobre a vida.",
      options: [
        { name: "Dream On", artist: "Nazareth" },
        { name: "Theres No More Corn On The Brasos", artist: "The Walkers" },
        { name: "If You Love Me", artist: "Peter Frampton" }, 
        { name: "Walk This Way", artist: "The Trammps" }
      ] 
    },
    {
      song: "https://radialistaedsonleite.github.io/qualeamusica3inter/WhenYoureGone-MaggieMacNeal.mp3",
      name: "When Youre Gone",
      artist: "Maggie MacNeal",
      image: "https://radialistaedsonleite.github.io/qualeamusica3inter/WhenYoureGone-MaggieMacNeal.jpg",
      description: "A cantora holandesa Maggie MacNeal, ex-integrante da dupla Mouth & MacNeal, seguiu carreira solo e lançou essa canção melancólica e marcante, consolidando sua presença no cenário europeu.",
      options: [
        { name: "When Youre Gone", artist: "Maggie MacNeal" },
        { name: "Living for the City", artist: "Barbra Streisand" },
        { name: "The Way We Were", artist: "Helen Reddy" },
        { name: "If I Can’t Have You", artist: "Andrea True Connection" }
      ] 
    },
    
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
