const game = new Game();
game.startTurn();
game.initializePlayers();
game.watchStats();

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    if (game.turnLeft > 0 && game.onePlayerAlive()) {
      game.startGame();
      game.skipturn();
      game.watchStats();
      game.theWinnerIs();
      console.log(game.turnLeft);
    }
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
