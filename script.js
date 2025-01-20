//Music
var muteButton = document.getElementById('mute-btn');
var audio = document.getElementById('background-music');

audio.play();

muteButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = '🔈'; // Unmute icon
  } else {
    audio.muted = true;
    muteButton.textContent = '🔇'; // Mute icon
  }
});

//Gameplay
var startgame = document.getElementById('start');
var howToPlay = document.getElementById('htp');