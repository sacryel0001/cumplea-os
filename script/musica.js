    const musica = new Audio('vud/Enamorado tuyo.mp3');
    musica.loop = true;

    // Espera a que el usuario haga clic en la página para comenzar la música
    document.addEventListener('click', () => {
      musica.play();
    }, { once: true }); 