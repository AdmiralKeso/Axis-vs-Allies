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

//Gameplay Variables
var startgame = document.getElementById('start');
var howToPlay = document.getElementById('htp');
var myGridSize = prompt('what size would you like your grid to be?');
var enemyGridSize = prompt('what size should you like your enemy grid to be?');
var myGrid = createGrid(myGridSize);
var enemyGrid = createGrid(enemyGridSize);

