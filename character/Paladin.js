class Paladin extends Character {
  constructor() {
    super();
    this.name = "Ulder";
    this.healthyPoint = 16;
    this.attackDamage = 3;
    this.mana = 160;
  }

  lighting = (victim) => {
    victim.healthyPoint -= 4;
    this.healthyPoint += 5;
    this.mana -= 40;
  };
}
