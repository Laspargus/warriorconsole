class Healer extends Character {
  constructor() {
    super();
    this.name = "Moana";
    this.healthyPoint = 8;
    this.attackDamage = 2;
    this.mana = 200;
  }

  healing = (victim) => {
    this.healthyPoint += 8;
    this.mana -= 25;
  };
}
