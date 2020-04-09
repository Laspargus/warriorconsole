class Fighter extends Character {
  constructor() {
    super();
    this.name = "Grace";
    this.healthyPoint = 12;
    this.attackDamage = 4;
    this.mana = 40;
  }

  darkVision = (victim) => {
    victim.healthyPoint -= 5;
    this.mana -= 20;
  };
}
