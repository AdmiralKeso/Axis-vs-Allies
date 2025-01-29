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

printGrid(enemyGrid, true);
printGrid(myGrid);

function createGrid(size) { //Creating a grid using arrays. The arrays will have arrays itself meaning it will form a grid.
  let grid = [];
  for (let i = 0; i < size; i++) { //creates size number of rows.
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = '-'; //fills each row with '-'.
    }
  }
  return grid;
}

function printGrid(grid, isEnemy = false) { //Testing the grid system so it prints in console.
  const headers = createHeaders(grid.length);
  console.log(headers);
  for (let i = 0; i < grid.length; i++) {
    let rowStr = i + ' ';
    for (let cell of grid[i]) {
      if (isEnemy && cell == '0') {
        rowStr += '- ';
      } else {
        rowStr += cell + ' ';
      }
    }
    console.log(rowStr);
  }
}

function createHeaders(size) { //Labels grid with numbers.
  let result = '  ';
  for (let i = 0; i < size; i++) {
    result += i + ' ';
  }
  return result;
}