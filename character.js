class Character {
  constructor() {
    this.state = "playing";
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.attackDamage);
    console.log(
      `${this.name} is attacking ${victim.name}. He gave himt ${this.attackDamage} damages. ${victim.name} got ${victim.healthyPoint} lifepoints left`
    );
  };

  takeDamage = (damage) => {
    this.healthyPoint -= damage;
    if (this.healthyPoint <= 0) {
      this.state = "looser";
      console.log(`${this.name} just died`);
    }
  };
}
