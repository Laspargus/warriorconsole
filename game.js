class Game {
  constructor() {
    this.turnLeft = 10;
    this.turn = 1;
    this.allPlayers = [];
  }

  skipturn = () => {
    this.turnLeft -= 1;
    this.turn += 1;
  };

  startTurn = () => {
    console.log(`It's turn ${this.turn}`);
  };

  initializePlayers = () => {
    const assassin = new Assassin();
    this.allPlayers.push(assassin);

    const berzerker = new Berzerker();
    this.allPlayers.push(berzerker);

    const fighter = new Fighter();
    this.allPlayers.push(fighter);

    const healer = new Healer();
    this.allPlayers.push(healer);

    const paladin = new Paladin();
    this.allPlayers.push(paladin);
  };

  watchStats = () => {
    console.log(this.allPlayers);
  };

  randomVictim = () => {
    let index = getRandomIntInclusive(0, 4);
    return this.allPlayers[index];
  };

  startGame = () => {
    for (let i = 0; i < this.allPlayers.length; i++) {
      let choosenPlayer = this.allPlayers[i];
      console.log(
        `It's time for ${choosenPlayer.name} - ${choosenPlayer.constructor.name} to play`
      );
      choosenPlayer.dealDamage(this.randomVictim());
    }
  };

  onePlayerAlive = () => {
    let result = false;
    this.allPlayers.forEach((element) => {
      if (element.state == "playing") {
        result = true;
      }
    });
    return result;
  };

  theWinnerIs = () => {
    let winner = [];
    for (let i = 0; i < this.allPlayers.length; i++) {
      if (this.allPlayers[i].state !== "looser") {
        winner.push(this.allPlayers[i]);
      }
    }
    if (winner.length == 1) console.log("The winner is", winner[0].name);
  };
}
